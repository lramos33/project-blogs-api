const services = require('../../services/User');
const JWT = require('../../services/JWT/JWT.service');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    await services.create(displayName, email, password, image);

    const token = JWT({ displayName, email, password, image });

    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = create;