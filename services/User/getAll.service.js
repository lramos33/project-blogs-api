const { Users } = require('../../models');

const getAll = async () => Users.findAll({ attributes: { exclude: 'password' } });

module.exports = getAll;