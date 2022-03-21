const { BlogPosts } = require('../../models');

const existPost = async (postId) => {
  const post = await BlogPosts.findByPk(postId);

  if (!post) {
    return { code: 404, message: 'Post does not exist' };
  }
};

const validateUserId = async (postId, userId) => {
  const { dataValues } = await BlogPosts.findByPk(postId);

  if (dataValues.userId !== userId) {
    return { code: 401, message: 'Unauthorized user' };
  }
};

const removePostValidation = async (postId, userId) => {
  const postError = await existPost(postId);
  if (postError) return postError;

  const userIdError = await validateUserId(postId, userId);
  if (userIdError) return userIdError;
};

module.exports = removePostValidation;