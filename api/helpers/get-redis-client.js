let client = null

module.exports = {
  friendlyName: 'Get Redis Client',
  description: 'Returns redis client instance',
  inputs: {},
  sync: true,
  fn: function (input, exits) {
    if (!client) {
      client = require('redis').createClient(process.env.REDIS_PORT, process.env.REDIS_HOST)
    }

    return exits.success(client)
  }
}
