const { Users } = require('../../models');

const create = async (displayName, email, password, image) => {
  await Users.create({ displayName, email, password, image });
};

module.exports = create;