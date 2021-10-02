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
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPets());
  });
  return (
    <div>
      <Navigation />
      <Switch>
        <PublicRoute path="/" restricted={false} component={Home} exact />
        <PublicRoute path="/login" restricted={true} component={Login} exact />
        <PublicRoute
          path="/explore"
          restricted={false}
          component={Explore}
          exact
        />
        <PublicRoute
          path="/search"
          restricted={false}
          component={SearchResult}
          exact
        />
        <PublicRoute
          path="/pet/:id/details"
          restricted={false}
          component={PetDetails}
          exact
        />
        <PrivateRoute path="/reserve" exact component={Reservation} />
      </Switch>
    </div>
  );
}

export default App;
