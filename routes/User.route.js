const express = require('express');
const controller = require('../controllers/User');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/', middleware.validateJWT, controller.getAll);
userRouter.get('/:id', middleware.validateJWT, controller.getById);
userRouter.post('/', middleware.userValidation, controller.create);

module.exports = userRouter;