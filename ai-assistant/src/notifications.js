```javascript
const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

function sendNotification(subscription, dataToSend='') {
  webpush.sendNotification(subscription, dataToSend)
    .catch((err) => {
      console.error("Error sending notification, reason: ", err);
    });
}

module.exports = { sendNotification };
```