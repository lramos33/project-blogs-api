const userValidation = require('./userValidation.middleware');
const error = require('./error.middleware');
const validateJWT = require('./validateJWT.middleware');
const loginValidation = require('./loginValidation.middleware');

module.exports = {
  userValidation,
  error,
  validateJWT,
  loginValidation,
};