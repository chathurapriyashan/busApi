const jwt = require('jsonwebtoken');
const { getAllUsersData } = require('../Controllers/DBController');

const SECRET_KEY = 'codedebugcrew%with%tehan%kulakshi%chathura%madusanka%tharindu';


exports.signToken = function(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
}


exports.verifyToken = function (req, res, next) {

  const token = req.body.token; // Expecting 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    const user = jwt.verify(token, SECRET_KEY);
    req.user = user; // Save decoded user in request
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

