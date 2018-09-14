let client = null

module.exports = {
  friendlyName: 'Get Google Map Client',
  description: 'Returns single instance of google map client',
  inputs: {},
  fn: async function (input, exits) {
    if (client == null) {
      client = require('@google/maps').createClient({
        key: process.env.GOOGLE_MAP_API_KEY,
        Promise: Promise,
      })
    }

    return exits.success(client);
  }
}
