import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import switchReducer from '../reducers/switch';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      switch: switchReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
