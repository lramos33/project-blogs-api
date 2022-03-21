const services = require('../../services/User');

const create = async (req, res, next) => {
  try {
    const { id } = req.user;
    await services.remove(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = create;