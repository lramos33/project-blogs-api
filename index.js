require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const middleware = require('./middlewares');

const app = express();
app.use(express.json());

app.use('/Categories', routes.Categories);
app.use('/Login', routes.Login);
app.use('/Post', routes.Post);
app.use('/user', routes.User);
app.use(middleware.error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
