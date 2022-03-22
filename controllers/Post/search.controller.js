const services = require('../../services/Post');

const search = async (req, res, next) => {
  try {
    const { q: searchTerm } = req.query;

    const result = await services.search(searchTerm);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = search;