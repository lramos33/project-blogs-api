const express = require('express');
const controller = require('../controllers/Login');
const middleware = require('../middlewares');

const loginRouter = express.Router();

loginRouter.post(
  '/',
  middleware.loginValidation,
  controller.postLogin,
);

module.exports = loginRouter;