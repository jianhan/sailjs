module.exports = {
  friendlyName: 'Get Google Map Client',
  description: 'Returns single instance of google map client',
  inputs: {},
  fn: function (input, exits) {
    client = require('@google/maps').createClient({
      key: process.env.GOOGLE_MAP_SERVER_API_KEY,
    })

    return exits.success(client);
  }
}
