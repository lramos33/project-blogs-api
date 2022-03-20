const express = require('express');
const controller = require('../controllers/Categories');
const middleware = require('../middlewares');

const categoriesRouter = express.Router();

categoriesRouter.post(
  '/',
  middleware.validateJWT,
  middleware.categoriesValidation,
  controller.create,
);

module.exports = categoriesRouter;