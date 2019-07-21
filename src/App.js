import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/reducer'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/ErrorPage'

const isDev = process.env.NODE_ENV === 'development'

const history = createBrowserHistory()

const middleware = [
    isDev ? logger : null,
    createSagaMiddleware()
].filter(x => x !== null)

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={() => (<>Body</>)}/>
            <Route component={ErrorPage}/>
          </Switch>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
