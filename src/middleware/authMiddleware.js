const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers['userId'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); 
    
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
}

module.exports = authenticate;