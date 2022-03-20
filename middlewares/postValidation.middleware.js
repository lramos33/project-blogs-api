const validation = require('../services/Validations');

const postValidation = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const error = await validation.postValidation(title, content, categoryIds);

    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = postValidation;