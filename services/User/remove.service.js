const { Users } = require('../../models');

const remove = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = remove;