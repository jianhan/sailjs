module.exports = {
  responseCache: function (duration) {
    return function (req, res, next) {
      const redisClient = sails.helpers.getRedisClient()
      next();
    };
  }
}
