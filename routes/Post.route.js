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

postRouter.get(
  '/',
  middleware.validateJWT,
  controller.getAll,
);

postRouter.get(
  '/:id',
  middleware.validateJWT,
  controller.getById,
);

postRouter.put(
  '/:id',
  middleware.validateJWT,
  middleware.editPostValidation,
  controller.edit,
);

postRouter.delete(
  '/:id',
  middleware.validateJWT,
  middleware.removePostValidation,
  controller.remove,
);

module.exports = postRouter;