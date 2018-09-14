let client = null

module.exports = {
  friendlyName: 'Get Google Map Client',
  description: 'Returns single instance of google map client',
  inputs: {},
  fn: function (input, exits) {
    if (!client) {
      client = require('@google/maps').createClient({
        key: process.env.GOOGLE_MAP_SERVER_API_KEY,
        Promise: Promise,
      })
    }

    return exits.success(client);
  }
}
