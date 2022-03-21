const services = require('../../services/Post');

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await services.remove(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = remove;