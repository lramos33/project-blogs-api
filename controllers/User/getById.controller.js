const services = require('../../services/User');

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await services.getById(id);

    if (!result) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getById;