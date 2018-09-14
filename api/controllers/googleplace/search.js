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
    }
  },

  exits: {
    success: {
      responseType: ''
    }
  },

  fn: async function (inputs, exits) {
    sails.log(inputs, this.req.param("radius", 200))
    // Display the welcome view.
    return exits.success("test");
  }
};
