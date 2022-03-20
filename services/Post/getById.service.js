const { BlogPosts, Users, Categories } = require('../../models');

const getById = async (id) => BlogPosts.findByPk(id, { include: [
  { model: Users, as: 'user', attributes: { exclude: 'password' } },
  { model: Categories, as: 'categories', through: { attributes: [] } },
] });

module.exports = getById;