```javascript
import { syncAssistantState } from '../reduxPersist';

class OfflineMode {
  constructor() {
    this.isOffline = false;
  }

  checkConnection() {
    window.addEventListener('offline', () => {
      this.isOffline = true;
      console.log('The network connection has been lost.');
    });

    window.addEventListener('online', () => {
      this.isOffline = false;
      console.log('The network connection has been restored.');
      this.syncAssistantState();
    });
  }

  syncAssistantState() {
    if (!this.isOffline) {
      syncAssistantState();
    }
  }
}

export default new OfflineMode();
```