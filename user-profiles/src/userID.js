```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true
  },
  // other fields...
});

module.exports = mongoose.model('User', UserSchema);
```