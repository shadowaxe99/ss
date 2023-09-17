```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Customization from './components/Customization';
import AIAssistant from './components/AIAssistant';
import NotFound from './components/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user-profile" component={UserProfile} />
      <Route path="/customization" component={Customization} />
      <Route path="/ai-assistant" component={AIAssistant} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
```