const { Users } = require('../../models');

const getById = async (id) => Users.findByPk(id, { attributes: { exclude: 'password' } });

module.exports = getById;