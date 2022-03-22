<h1 align="center">PROJETO</h1>

<p align="center">✔️ Concluded</p>

## 💻 Instalando o projeto

Clone o repositório:

```
git clone git@github.com:lramos33/project-blogs-api.git
```

Acesse a pasta do repositório

```
cd project-blogs-api
```

Instale as dependências:
```
npm install
```

No arquivo .env adicione as variáveis de ambiente:
```
MYSQL_HOST=example
MYSQL_USER=example
MYSQL_PASSWORD=example
```

Execute a aplicação
```
npm run dev
```

## 🚀 Habilidades

- Criar e associar tabelas usando models do sequelize;
- Construir endpoints para consumir os models que criar;
- Fazer um CRUD com o ORM.

## 🔧 Desenvolvimento

Nesse projeto foi arquiteturado e desenvolvido uma API de um CRUD posts de blog (com o Sequelize).

## 📝 Requisitos do projeto

- [x] 1. Sua aplicação deve ter o endpoint POST `/user`

- O endpoint deve ser capaz de adicionar um novo user a sua tabela no banco de dados;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```
- O campo `displayName` deverá ser uma string com no mínimo de 8 caracteres;

- O campo `email` será considerado válido se tiver o formato `<prefixo>@<domínio>` e se for único. Ele é obrigatório.

- A senha deverá conter 6 caracteres. Ela é obrigatória.

- Caso exista uma pessoa com o mesmo email na base, deve-se retornar o seguinte erro:

  ```json
  {
    "message": "User already registered"
  }
  ```

- Caso contrário, retornar a mesma resposta do endpoint de `/login`, um token `JWT`:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_

##

- [x] 2. Sua aplicação deve ter o endpoint POST `/login`

- O corpo da requisição deverá seguir o formato abaixo:

  ```json
  {
    "email": "email@mail.com",
    "password": "123456"
  }
  ```

- Caso algum desses campos seja inválido ou não exista um usuário correspondente no banco de dados, retorne um código de status 400 com o corpo `{ message: "Invalid fields" }`.

- Caso esteja tudo certo com o login, a resposta deve ser um token `JWT`, no seguinte formato:

  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
  }
  ```
  _O token anterior é fictício_

##

- [x] 3. Sua aplicação deve ter o endpoint GET `/user`

- Deve listar todos os **Users** e retorná-los na seguinte estrutura:

  ```json
  [
    {
      "id": "401465483996",
      "displayName": "Brett Wiltshire",
      "email": "brett@email.com",
      "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
    }
  ]
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

##

- [x] 4. Sua aplicação deve ter o endpoint GET `/user/:id`

- Retorna os detalhes do usuário baseado no `id` da rota. Os dados devem ter o seguinte formato:

  ```json
  {
    "id": "401465483996",
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

- A requisição deve ter token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

##

- [x] 5. Sua aplicação deve ter o endpoint POST `/categories`

- Esse endpoint deve receber uma _Categoria_ no corpo da requisição e criá-la no banco. O corpo da requisição deve ter a seguinte estrutura:

 ```json
  {
    "name": "Inovação"
  }
  ```

- Caso a Categoria não contenha o `name` a API deve retornar um erro de `status 400`.

- A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

##

- [x] 6. Sua aplicação deve ter o endpoint GET `/categories`

- Esse endpoint deve listar todas as Categorias e retorná-las na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
```

##

- [x] 7. Sua aplicação deve ter o endpoint POST `/post`

- Esse endpoint deve receber um _BlogPost_ no corpo da requisição e criá-lo no banco. O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key",
    "categoryIds": [1, 2]
  }
  ```

- Caso o post não contenha o `title`, `content` ou `categoryIds` a API deve retornar um erro de `status 400`.

- A requisição deve ter o token de autenticação nos headers e, caso contrário, retorne um código de `status 401`.

##

- [x] 8. Sua aplicação deve ter o endpoint GET `/post`

- Esse endpoint deve listar todos os _BlogPosts_ e retorná-los na seguinte estrutura:

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

##

- [x] 9. Sua aplicação deve ter o endpoint GET `post/:id`

- Retorna um **BlogPost** com o `id` especificado. O retorno deve ter os seguinte formato:

```json
{
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

##

- [x] 10. Sua aplicação deve ter o endpoint PUT `/post/:id`

- O endpoint deve receber um **BlogPost** que irá sobrescrever o original com o `id` especificado na URL. Só deve ser permitido para o usuário que criou o **BlogPost**.

- A(s) categoria(s) do post **não** podem ser editadas, somente o `title` e `content`.

- O corpo da requisição deve ter a seguinte estrutura:

  ```json
  {
    "title": "Latest updates, August 1st",
    "content": "The whole text for the blog post goes here in this key"
  }
  ```

- Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código `status 401`.

- Caso uma requisição sem token seja recebida, deve-se retornar um código de `status 401`.

- Caso o post não contenha o `title` e/ou o `content` a API deve retornar um erro de `status 400`.

##

- [x] 11. Sua aplicação deve ter o endpoint DELETE `post/:id`

- Deleta o post com o `id` especificado. Só deve ser permitido para o usuário que criou o **BlogPost**.

- Caso uma pessoa diferente de quem criou faça a requisição, deve retornar um código `status 401`.

- Caso uma requisição sem token seja recebida, deve-se retornar um código de `status 401`.

- Caso o post referido não exista, deve-se retornar um código de `status 404`.

##

- [x] 12. Sua aplicação deve ter o endpoint DELETE `/user/me`

- Utilizando o token de autenticação nos headers, o usuário correspondente deve ser apagado.

##

- [x] 13. Sua aplicação deve ter o endpoint GET `post/search?q=:searchTerm`

- Retorna uma array de **BlogPosts** que contenham em seu título, ou conteúdo, o termo pesquisado no `queryParam` da URL. O retorno deve ter o seguinte formato:

```json
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```

- Caso nenhum **BlogPost** satisfaça a busca, retorne um array vazio.

##

<div align="center">
  <img src="https://shields.io/github/repo-size/lramos33/project-blogs-api">
  <img src="https://shields.io/github/languages/top/lramos33/project-blogs-api">
  <img src="https://shields.io/github/last-commit/lramos33/project-blogs-api">
</div>