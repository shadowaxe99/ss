```javascript
const { app } = require('electron');

app.setLoginItemSettings({
  openAtLogin: true,
  path: app.getPath('exe'),
});

app.on('ready', () => {
  if (!app.isDefaultProtocolClient('elysium')) {
    app.setAsDefaultProtocolClient('elysium');
  }
});
```