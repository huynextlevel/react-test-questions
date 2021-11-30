import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import routes from './routes';

function App() {

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
