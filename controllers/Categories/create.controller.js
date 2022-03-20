const services = require('../../services/Categories');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const created = await services.create(name);

    return res.status(201).json(created.dataValues);
  } catch (error) {
    next(error);
  }
};

module.exports = create;