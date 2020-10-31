import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

// REDUX FIREBASE+
import { Provider } from "react-redux";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";
import thunkMiddleware from "redux-thunk";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import firebase from "./config/firebase";
import rootReducer from "./store/reducers/rootReducer/rootReducer";

const middlewares = [
  thunkMiddleware.withExtraArgument({ getFirebase, getFirestore }),
];
const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase)
);
const store = createStore(rootReducer, composedEnhancer);

const reactReduxFirestoreConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirestoreConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(


    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    </ThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
