import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Dashboard from './components/Dashboard';
import Store from './store/Store';

import './sass/main.sass';

const store = Store;

const history = syncHistoryWithStore(hashHistory, store);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Dashboard}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard" component={Dashboard} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

render(<Root />, document.body.appendChild(document.createElement('div')));
