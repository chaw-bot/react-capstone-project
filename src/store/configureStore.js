import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { StatsReducer } from './reducer';
import ContinentReducer from './continentReducer';

const reducers = combineReducers({
  details: StatsReducer,
  continent: ContinentReducer,
});

const middlewares = [thunk, logger];

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export default store;
