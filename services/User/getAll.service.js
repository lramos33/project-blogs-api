const { Users } = require('../../models');

const getAll = async () => Users.findAll();

module.exports = getAll;