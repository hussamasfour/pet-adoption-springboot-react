import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Navigation from "./nav/Navigation";
import Explore from "../pages/explore/Explore";
import Home from "../pages/home/Home";
import { fetchAllPets } from "../redux/actions";
import Login from "./login/Login";
import SearchResult from "./searchResult/SearchResult";
import PetDetails from "./pet-details/PetDetails";
import Reservation from "../pages/reservation/Reservation";

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
        <Route path="/search" exact component={SearchResult} />
        <Route path="/pet/:id/details" exact component={PetDetails} />
        <Route path="/reserve" exact component={Reservation} />
      </Switch>
    </div>
  );
}

export default App;
