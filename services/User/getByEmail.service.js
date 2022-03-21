const { Users } = require('../../models');

const getByEmail = async (email) => Users.findOne({ where: { email } });

module.exports = getByEmail;