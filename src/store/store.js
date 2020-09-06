import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer/rootReducer";
import thunk from "redux-thunk";
import { getFirebase } from "react-redux-firebase";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
