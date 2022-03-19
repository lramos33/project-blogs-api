const { Users } = require('../../models');

const validateEmail = async (email) => {
  if (email === '') {
    return { code: 400, message: '"email" is not allowed to be empty' };
  }

  if (!email) {
    return { code: 400, message: '"email" is required' };
  }

  const registeredUser = await Users.findOne({ where: { email } });
  if (!registeredUser) {
    return { code: 400, message: 'Invalid fields' };
  }
};

const validatePassword = (password) => {
  if (password === '') {
    return { code: 400, message: '"password" is not allowed to be empty' };
  }

  if (!password) {
    return { code: 400, message: '"password" is required' };
  }
};

const loginValidation = async (email, password) => {
  const emailError = await validateEmail(email);
  const passwordError = validatePassword(password);

  if (emailError) return emailError;
  if (passwordError) return passwordError;
};

module.exports = loginValidation;