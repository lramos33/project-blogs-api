const services = require('../../services/Post');

const create = async (req, res, next) => {
  try {
    const { email } = req.user;
    const { title, content, categoryIds } = req.body;
    const created = await services.create(email, title, content, categoryIds);

    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

module.exports = create;