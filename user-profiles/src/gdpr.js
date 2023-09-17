```javascript
const express = require('express');
const router = express.Router();

// Middleware for GDPR compliance
const gdprCompliance = (req, res, next) => {
  // Check if user has accepted GDPR terms
  if (!req.user.gdprAccepted) {
    return res.status(403).json({ error: 'User has not accepted GDPR terms' });
  }
  next();
};

router.use(gdprCompliance);

module.exports = router;
```