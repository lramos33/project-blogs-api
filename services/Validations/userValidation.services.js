const { Users } = require('../../models');

const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

const validateEmail = async (email) => {
  if (!email) {
    return { code: 400, message: '"email" is required' };
  }
  
  if (!email.match(EMAIL_REGEX)) {
    return { code: 400, message: '"email" must be a valid email' };
  }

  const uniqueEmail = await Users.findOne({ where: { email } });
  if (uniqueEmail) {
    return { code: 409, message: 'User already registered' };
  }
};

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
    return { code: 400, message: '"displayName" length must be at least 8 characters long' };
  }
};

const validatePassword = (password) => {
  if (!password) {
    return { code: 400, message: '"password" is required' };
  }
  
  if (password.length !== 6) {
    return { code: 400, message: '"password" length must be 6 characters long' };
  }
};

const userValidation = async (displayName, email, password) => {
  const displayNameError = validateDisplayName(displayName);
  const passwordError = validatePassword(password);
  const emailError = await validateEmail(email);

  if (displayNameError) return displayNameError;
  if (passwordError) return passwordError;
  if (emailError) return emailError;
};

module.exports = userValidation;