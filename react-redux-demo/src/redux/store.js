import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cakeReducer } from './cake/cakeReducer';
import { iceCreamReducer } from './IceCream/IceCreamReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
