```javascript
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware for checking if user is authenticated
const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.id;
    next();
  });
};

// Middleware for checking if user has specific role
const hasRole = (role) => {
  return async (req, res, next) => {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'No user found' });
    }

    if (user.role !== role) {
      return res.status(403).json({ error: 'You do not have the necessary permissions' });
    }

    next();
  };
};

module.exports = {
  isAuthenticated,
  hasRole
};
```