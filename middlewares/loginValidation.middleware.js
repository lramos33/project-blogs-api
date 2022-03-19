const validation = require('../services/Validations');

const loginValidation = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const error = await validation.loginValidation(email, password);

    if (error) {
      return res.status(error.code).json({ message: error.message });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = loginValidation;