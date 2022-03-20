const { BlogPosts, Users, Categories } = require('../../models');

const getAll = async () => BlogPosts.findAll({ include: [
  { model: Users, as: 'user', attributes: { exclude: 'password' } },
  { model: Categories, as: 'categories', through: { attributes: [] } },
] });

module.exports = getAll;