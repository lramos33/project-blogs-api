const userValidation = require('./userValidation.middleware');
const error = require('./error.middleware');
const validateJWT = require('./validateJWT.middleware');

module.exports = {
  userValidation,
  error,
  validateJWT,
};