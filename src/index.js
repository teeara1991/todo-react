import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import { initialState, reducer } from "./reducers/reducer";
import App from './components/app/app';

const store = createStore(reducer, initialState);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
