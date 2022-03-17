const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/Categories', routes.Categories);
app.use('/Login', routes.Login);
app.use('Post', routes.Post);
app.use('User', routes.User);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
