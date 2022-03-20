const { Categories } = require('../../models');

const getAll = async () => Categories.findAll();

module.exports = getAll;