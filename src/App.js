import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import history from './history'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={() => (<>Body</>)}/>
          <Route component={() => (<>404</>)}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
