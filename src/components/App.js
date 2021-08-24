import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../nav/Navigation";
import Explore from "../pages/explore/Explore";
import Home from "../pages/home/Home";
import Login from "./login/Login";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/explore" exact component={Explore} />
      </Switch>
    </div>
  );
}

export default App;
