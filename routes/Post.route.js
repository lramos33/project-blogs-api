const express = require('express');
const controller = require('../controllers/Post');
const middleware = require('../middlewares');

const postRouter = express.Router();

postRouter.post(
  '/',
  middleware.validateJWT,
  middleware.postValidation,
  controller.create,
);

module.exports = postRouter;