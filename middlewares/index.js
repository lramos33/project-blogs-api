const userValidation = require('./userValidation.middleware');
const error = require('./error.middleware');

module.exports = {
  userValidation,
  error,
};