module.exports = {
  friendlyName: 'Google Place Search',
  description: 'Lookup near by places via google places API',

  inputs: {
    radius: {
      description: 'Search range defined by radius in meters',
      type: 'number',
    },
    lat: {
      description: 'Latitude of location to search',
      type: 'number',
      required: true
    },
    lon: {
      description: 'Longitude of location to search',
      type: 'number',
      required: true
    },
    minprice: {
      description: 'Minimal price',
      type: 'number',
    },
    maxprice: {
      description: 'Max price',
      type: 'number',
    },
    opennow: {
      description: 'Is open now',
      type: 'boolean',
    }
  },

  exits: {
    success: {
      responseType: ''
    }
  },

  fn: async function (inputs, exits) {
    const googlemapClient = await sails.helpers.getGoogleMapClient();

    let options = {
      location: [inputs.lat, inputs.lon],
      radius: _.get(inputs, 'radius', 2000),
      type: 'restaurant'
    }

    if (_.has(inputs, 'minprice')) {
      options['minprice'] = inputs.minprice
    }

    if (_.has(inputs, 'maxprice')) {
      options['maxprice'] = inputs.maxprice
    }

    if (_.has(inputs, 'opennow')) {
      options['opennow'] = inputs.opennow
    }

    googlemapClient.placesNearby(options, function (err, response) {
      if (!err) {
        return exits.success(response.json.results);
      }
      return exits.success("error");
    });

    // googlemapClient.places(options).asPromise().then(r => {
    //   return exits.success("success");
    // }).catch(e => {
    //   return exits.success("err");
    // })

    // googlemapClient.places(options, function (err, response) {
    //   return exits.success("test");
    // })
  }
};


