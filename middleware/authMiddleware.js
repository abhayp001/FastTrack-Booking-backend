const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  // const token = req.header('Authorization')?.split(' ')[1];  // Extract token from header (Bearer <token>)
  const token = authorizationHeader ? authorizationHeader.split(' ')[1] : null;
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;  // Attach userId to request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = protect;
