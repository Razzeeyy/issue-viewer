import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import configureStore from './store'
import ErrorBoundary from './components/ErrorBoundary'
import ErrorPage from './components/pages/ErrorPage'
import MainPage from './components/pages/MainPage'
import DetailsPage from './components/pages/DetailsPage';
import IssuesPage from './components/pages/IssuesPage';

const store = configureStore()
const history = createBrowserHistory()

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/:user/:repo/:number" component={DetailsPage}/>
            <Route path="/:user/:repo" component={IssuesPage}/>
            <Route component={ErrorPage}/>
          </Switch>
        </ErrorBoundary>
      </Router>
    </Provider>
  );
}

export default App;
