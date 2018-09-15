module.exports = {
  foobar: function () {
    console.log('Initializing `foobar` (HTTP middleware)...');
    return function (req, res, next) {
      console.log('Received HTTP request: ' + req.method + ' ' + req.path);
      return next();
    };
  }
}
