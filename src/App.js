/*
 * Component Description
 */
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers/";

import Router from "./Router";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const config = {
      // * Add config
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
