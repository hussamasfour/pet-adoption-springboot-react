import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import setup from "./api/setupInterceptor";

import "./index.css";
import App from "./components/App";
import rootReducer from "./redux/reducers";

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

setup(store);
