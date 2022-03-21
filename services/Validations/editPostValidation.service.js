const { BlogPosts } = require('../../models');

const validateCategoryIds = (categoryIds) => {
  if (categoryIds) {
    return { code: 400, message: 'Categories cannot be edited' };
  }
};

const validateUserId = async (postId, userId) => {
  const { dataValues } = await BlogPosts.findByPk(postId);

  if (dataValues.userId !== userId) {
    return { code: 401, message: 'Unauthorized user' };
  }
};

const validateTitle = (title) => {
  if (!title) {
    return { code: 400, message: '"title" is required' };
  }
};

const validateContent = (content) => {
  if (!content) {
    return { code: 400, message: '"content" is required' };
  }
};

const editPostValidation = async ({ postId, userId, title, content, categoryIds }) => {
  const categoryIdsError = validateCategoryIds(categoryIds);
  const userIdError = await validateUserId(postId, userId);
  const titleError = validateTitle(title);
  const contentError = validateContent(content);

  if (categoryIdsError) return categoryIdsError;
  if (userIdError) return userIdError;
  if (titleError) return titleError;
  if (contentError) return contentError;
};

module.exports = editPostValidation;