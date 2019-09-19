const boom = require('@hapi/boom');

module.exports = (_, res, next) => {
  res.e = boom;
  next();
};
