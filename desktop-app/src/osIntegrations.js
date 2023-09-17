```javascript
const { app, Notification, globalShortcut } = require('electron');

class OSIntegrations {
  constructor() {
    this.shortcuts = {
      'CommandOrControl+R': () => {
        console.log('Refresh shortcut triggered');
      },
      'CommandOrControl+Q': () => {
        app.quit();
      }
    };
  }

  setupShortcuts() {
    Object.keys(this.shortcuts).forEach((key) => {
      globalShortcut.register(key, this.shortcuts[key]);
    });
  }

  sendNotification(title, body) {
    const notification = {
      title: title,
      body: body
    };

    new Notification(notification).show();
  }
}

module.exports = new OSIntegrations();
```