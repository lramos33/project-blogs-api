const validateName = (name) => {
  if (!name) {
    return { code: 400, message: '"name" is required' };
  }
};

const loginValidation = (name) => {
  const nameError = validateName(name);

  if (nameError) return nameError;
};

module.exports = loginValidation;