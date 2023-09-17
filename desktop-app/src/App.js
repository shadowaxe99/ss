```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store, persistor } from './store';
import Routes from './routes';
import WidgetUI from './widgetUI';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes />
          <WidgetUI />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
```