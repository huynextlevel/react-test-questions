import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import routes from './routes';
import * as appActions from './store/action/app';
import ScrollIntoView from './components/ScrollIntoView';

const MOBILE_BREAKPOINT = 900; // Define mobile breakpoint of your website.

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= MOBILE_BREAKPOINT) {
        dispatch(appActions.checkIsMobile(true));
      } else {
        dispatch(appActions.checkIsMobile(false));
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <Router>
      <ScrollIntoView>
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
      </ScrollIntoView>
    </Router>
  );
}

export default App;
