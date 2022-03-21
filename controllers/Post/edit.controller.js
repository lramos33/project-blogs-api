const services = require('../../services/Post');

const edit = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { title, content } = req.body;
    const updated = await services.edit(postId, title, content);
    
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

module.exports = edit;