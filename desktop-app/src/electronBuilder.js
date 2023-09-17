```javascript
const electronBuilder = require('electron-builder');
const Platform = electronBuilder.Platform;

function autoUpdate() {
    const autoUpdater = require('electron-updater').autoUpdater;

    autoUpdater.on('checking-for-update', () => {
        console.log('Checking for update...');
    });

    autoUpdater.on('update-available', (info) => {
        console.log('Update available.');
    });

    autoUpdater.on('update-not-available', (info) => {
        console.log('Update not available.');
    });

    autoUpdater.on('error', (err) => {
        console.log('Error in auto-updater. ' + err);
    });

    autoUpdater.on('download-progress', (progressObj) => {
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        console.log(log_message);
    });

    autoUpdater.on('update-downloaded', (info) => {
        console.log('Update downloaded');
    });

    autoUpdater.checkForUpdatesAndNotify();
}

function buildInstaller() {
    electronBuilder.build({
        targets: Platform.WINDOWS.createTarget(),
        config: {
            appId: 'com.elysiumos',
            productName: 'Elysium OS',
            directories: {
                output: 'build'
            },
            win: {
                icon: 'assets/icon.ico'
            },
            nsis: {
                oneClick: false,
                allowToChangeInstallationDirectory: true
            }
        }
    }).then(() => {
        console.log('Build complete');
    }).catch((error) => {
        console.error('Build failed', error);
    });
}

module.exports = {
    autoUpdate,
    buildInstaller
};
```