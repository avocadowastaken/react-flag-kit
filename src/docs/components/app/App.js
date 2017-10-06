import React from "react";

import "./App.css";
import FlagIconSection from "../pages/flag-icon/FlagIconSection";
import CDNFlagIconSection from "../pages/cdn-flag-icon/CDNFlagIconSection";

export default class App extends React.Component {
  static childContextTypes = {};

  getChildContext() {
    return {};
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <FlagIconSection />
          <CDNFlagIconSection />
        </div>

        <footer className="footer">
          <nav className="navbar navbar-light bg-light navbar-expand-sm">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/umidbekkarimov/react-flag-kit"
                >
                  Github
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://twitter.com/umidbek_k">
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    );
  }
}
