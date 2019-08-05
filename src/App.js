import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/ErrorPage'

const store = configureStore()
const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact render={() => (<>Body</>)}/>
            <Route component={ErrorPage}/>
          </Switch>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
