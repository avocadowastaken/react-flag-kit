// eslint-disable-next-line import/no-extraneous-dependencies
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import HashRouter from "react-router-dom/HashRouter";

import App from "./docs/components/app/App";

if (window.navigator) {
  /**
   * Make mouse work with google maps in Windows touch devices.
   *
   * @link http://stackoverflow.com/a/37611736/1709679
   */
  window.navigator.msPointerEnabled = true;

  /**
   * Make touch/pan/zoom work with google maps work in Windows touch devices.
   *
   * @link https://code.google.com/p/gmaps-api-issues/issues/detail?id=6425
   */
  window.navigator.msMaxTouchPoints = window.navigator.msMaxTouchPoints || 2;
}

renderApp();

if (module.hot) {
  module.hot.accept("./docs/components/app/App", renderApp);
}

function renderApp() {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById("root"),
  );
}
