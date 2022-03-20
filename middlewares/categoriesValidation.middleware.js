const validation = require('../services/Validations');

const categoriesValidation = (req, res, next) => {
  try {
    const { name } = req.body;
    const error = validation.categoriesValidation(name);
    
    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = categoriesValidation;