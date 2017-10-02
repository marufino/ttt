/* eslint-disable global-require */
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import rootReducer from '../reducers/rootReducer';

let middleware = [thunk];

const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();

const logger = createLogger({ collapsed: true });
middleware = [...middleware, reduxImmutableStateInvariant, logger, routerMiddleware(hashHistory)];

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}
