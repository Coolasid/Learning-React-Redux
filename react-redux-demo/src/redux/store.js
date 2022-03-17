import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cakeReducer } from './cake/cakeReducer';
import { iceCreamReducer } from './IceCream/IceCreamReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import logger from 'redux-logger';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  users: userReducer,
  iceCream: iceCreamReducer,

});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
