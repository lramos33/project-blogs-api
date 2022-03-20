const { Categories } = require('../../models');

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

const validateCategoryIds = async (categoryIds) => {
  if (!categoryIds) {
    return { code: 400, message: '"categoryIds" is required' };
  }

  const allCategories = await Categories.findAll();
  const allCategoriesIds = allCategories.map((category) => category.id);
  const existCategory = categoryIds.every((id) => allCategoriesIds.includes(id));

  if (!existCategory) {
    return { code: 400, message: '"categoryIds" not found' };
  }
};

const postValidation = async (title, content, categoryIds) => {
  const titleError = validateTitle(title);
  const contentError = validateContent(content);
  const categoryIdsError = await validateCategoryIds(categoryIds);

  if (titleError) return titleError;
  if (contentError) return contentError;
  if (categoryIdsError) return categoryIdsError;
};

module.exports = postValidation;