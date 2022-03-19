const JWT = require('../../services/JWT/JWT.services');

const postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = JWT({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = postLogin;