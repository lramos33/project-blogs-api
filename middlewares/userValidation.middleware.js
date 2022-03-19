const validation = require('../services/Validations');

const userValidation = async (req, res, next) => {
  try {
    const { displayName, email, password } = req.body;
    const error = await validation.userValidation(displayName, email, password);
    
    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = userValidation;