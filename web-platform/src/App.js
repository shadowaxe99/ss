```javascript
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import store from './store';
import apolloClient from './apolloClient';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
```