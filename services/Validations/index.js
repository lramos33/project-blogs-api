const userValidation = require('./userValidation.services');
const loginValidation = require('./loginValidation.service');
const categoriesValidation = require('./categoriesValidation.service');
const postValidation = require('./postValidation.service');
const editPostValidation = require('./editPostValidation.service');

module.exports = {
  userValidation,
  loginValidation,
  categoriesValidation,
  postValidation,
  editPostValidation,
};