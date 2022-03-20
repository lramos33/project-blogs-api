const userValidation = require('./userValidation.middleware');
const error = require('./error.middleware');
const validateJWT = require('./validateJWT.middleware');
const loginValidation = require('./loginValidation.middleware');
const categoriesValidation = require('./categoriesValidation.middleware');
const postValidation = require('./postValidation.middleware');

module.exports = {
  userValidation,
  error,
  validateJWT,
  loginValidation,
  categoriesValidation,
  postValidation,
};