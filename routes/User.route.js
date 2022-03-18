const express = require('express');
const controller = require('../controllers/User');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.get('/', controller.getAll);
userRouter.post('/', middleware.userValidation, controller.create);

module.exports = userRouter;