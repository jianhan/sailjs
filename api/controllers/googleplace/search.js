module.exports = {
  friendlyName: 'Google Place Search',
  description: 'Lookup near by places via google places API',

  inputs: {
    keyword: {
      description: 'Keyword used for searching',
      extendedDescription: 'A term to be matched against all available fields, including but not limited to name, type, and address, as well as customer reviews and other third-party content.',
      type: 'string'
    },
    radius: {
      description: 'Search range defined by radius in meters',
      type: 'number',
      defaultsTo: 2000,
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
      description: 'Valid values range between 0 (most affordable) to 4 (most expensive), inclusive',
      type: 'number',
      max: 4,
      min: 1
    },
    maxprice: {
      description: 'Valid values range between 0 (most affordable) to 4 (most expensive), inclusive',
      type: 'number',
      max: 4,
      min: 1
    },
    opennow: {
      description: 'Is open now',
      type: 'boolean',
    }
  },

  exits: {
    success: {
      responseType: ''
    },
  },

  fn: async function (inputs, exits) {
    const googlemapClient = await sails.helpers.getGoogleMapClient();

    let options = {
      location: [inputs.lat, inputs.lon],
      radius: _.get(inputs, 'radius', 2000),
      type: 'restaurant'
    }

    if (_.has(inputs, 'keyword')) {
      options['keyword'] = inputs.keyword
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

  }
};


