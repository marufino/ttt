import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import api from './api.reducer';

const appReducer = combineReducers({
  api,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
