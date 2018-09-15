module.export = {
  cache: (req, res, next) => {
    sails.log('Quick and dirty test:', req.allParams());
    return next();
  }
}
