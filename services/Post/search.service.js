const { Op } = require('sequelize');
const { BlogPosts, Users, Categories } = require('../../models');

const search = async (searchTerm) => BlogPosts.findAll({
  where: {
    [Op.or]: [
      { title: { [Op.like]: `%${searchTerm}%` } },
      { content: { [Op.like]: `%${searchTerm}%` } },
    ],
  },
  include: [
    { model: Users, as: 'user', attributes: { exclude: 'password' } },
    { model: Categories, as: 'categories', through: { attributes: [] } },
  ],
});

module.exports = search;