import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Explore from "../pages/explore/Explore";
import Home from "../pages/home/Home";
import { fetchAllPets } from "../redux/actions";
import Login from "./login/Login";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPets());
  });
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
