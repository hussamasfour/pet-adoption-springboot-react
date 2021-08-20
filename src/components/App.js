import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login/Login";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
