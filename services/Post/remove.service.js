const { BlogPosts } = require('../../models');

const remove = async (id) => {
  await BlogPosts.destroy({ where: { id } });
};

module.exports = remove;