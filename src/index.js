import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// REDUX FIREBASE
import store from "./store/store";
import { Provider } from "react-redux";
import firebase from "./config/firebase";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./theme";

const reactReduxFirestoreConfig = {
  userProfile: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const rrfProps = {
  firebase,
  config: reactReduxFirestoreConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
        </ReactReduxFirebaseProvider>
      </Provider>
    </ThemeProvider>


  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
