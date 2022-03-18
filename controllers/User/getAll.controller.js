const services = require('../../services/User');

const getAll = async (req, res, next) => {
  try {
    const result = await services.getAll();
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;