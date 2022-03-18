const services = require('../../services/User');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    await services.create(displayName, email, password, image);
    return res.status(201).json('TOKEN VAI AQUI DEPOIS');
  } catch (error) {
    next(error);
  }
};

module.exports = create;