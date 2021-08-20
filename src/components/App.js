import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "./login/Login";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
