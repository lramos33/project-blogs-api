const { BlogPosts, Users, PostsCategories } = require('../../models');

const create = async (email, title, content, categoryIds) => {
  const { id: userId } = await Users.findOne({ where: { email } });
  const { id: postId } = await BlogPosts.create({ title, content, userId });

  await Promise.all(
    categoryIds.map((categoryId) => (
      PostsCategories.create({ postId, categoryId })
    )),
  );

  return { id: postId, userId, title, content };
};

module.exports = create;