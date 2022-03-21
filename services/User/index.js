const getAll = require('./getAll.service');
const create = require('./create.service');
const getById = require('./getById.service');
const getByEmail = require('./getByEmail.service');
const remove = require('./remove.service');

module.exports = {
  getAll,
  create,
  getById,
  getByEmail,
  remove,
};