import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({

    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
