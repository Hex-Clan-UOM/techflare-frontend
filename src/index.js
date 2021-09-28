import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import { Provider } from "react-redux";
import initialStore from "./Store/initialStore";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={initialStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
