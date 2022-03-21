const validation = require('../services/Validations');

const removePostValidation = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: userId } = req.user;

    const error = await validation.removePostValidation(postId, userId);

    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = removePostValidation;