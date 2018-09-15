let client = null

module.exports = {
  friendlyName: 'Get Redis Client',
  description: 'Returns redis client instance',
  inputs: {},
  sync: true,
  fn: function (input, exits) {
    if (!client) {
      client = require('redis').createClient(6379, 'redis')
    }

    return exits.success(client)
  }
}
