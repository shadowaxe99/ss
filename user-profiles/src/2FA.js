```javascript
const speakeasy = require('speakeasy');
const User = require('./userID.js');

// Generate a secret for the user
function generateSecret(userId) {
  const secret = speakeasy.generateSecret({length: 20});
  User.updateOne({ _id: userId }, { $set: { twoFASecret: secret.base32 } })
    .then(() => console.log('2FA secret generated and stored.'))
    .catch(err => console.error(err));
  return secret;
}

// Verify the token entered by the user
function verifyToken(userId, userToken) {
  return User.findOne({ _id: userId })
    .then(user => {
      const verified = speakeasy.totp.verify({
        secret: user.twoFASecret,
        encoding: 'base32',
        token: userToken
      });
      return verified;
    })
    .catch(err => console.error(err));
}

module.exports = { generateSecret, verifyToken };
```