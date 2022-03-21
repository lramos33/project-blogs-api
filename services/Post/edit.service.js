const { BlogPosts, Categories } = require('../../models');

const edit = async (postId, title, content) => {
  await BlogPosts.update({ title, content }, { where: { id: postId } });

  return BlogPosts.findByPk(postId, { 
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: { model: Categories, as: 'categories', through: { attributes: [] } },
  });
};

module.exports = edit;