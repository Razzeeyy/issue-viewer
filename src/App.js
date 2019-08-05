import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './configureStore'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/pages/ErrorPage'
import MainPage from './components/pages/MainPage'

const store = configureStore()
const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
