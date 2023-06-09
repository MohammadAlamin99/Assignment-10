const jwt = require('jsonwebtoken');

exports.generateToken = (req , res) => {
  const payload = req.headers['userId']

  let token = jwt.sign(payload, process.env.SECRET_KEY);
  res.send(token)
}
