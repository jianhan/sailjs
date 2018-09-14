module.exports = {
  friendlyName: 'Google Place Search',
  description: 'Lookup near by places via google places API',

  inputs: {
    query: {
      description: 'Search query to find places',
      type: 'string',
      required: true
    },
    radius: {
      description: 'Search range defined by radius in meters',
      type: 'number',
      default: 500
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
    googlemapClient.places({
      query: inputs.query,
      location: [inputs.lat, inputs.lon],
      radius: this.req.param("radius", 1000),
      minprice: 1,
      maxprice: 4,
      opennow: true,
      type: 'restaurant'
    })
      .asPromise()
      .then(function (response) {
        sails.log(response, "************");
      })

    // Display the welcome view.
    return exits.success("test");
  }
};
