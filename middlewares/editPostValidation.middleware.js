const validation = require('../services/Validations');

const editPostValidation = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = req.user;
    const { title, content, categoryIds } = req.body;

    const editPostValidationParams = { postId, userId, title, content, categoryIds };

    const error = await validation.editPostValidation(editPostValidationParams);

    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = editPostValidation;