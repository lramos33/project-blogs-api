const create = require('./create.service');
const getAll = require('./getAll.service');
const getById = require('./getById.service');
const edit = require('./edit.service');
const remove = require('./remove.service');
const search = require('./search.service');

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
  search,
};