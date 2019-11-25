import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import { Home, Profile, Components, Timeline, FriendsProfile } from "../pages";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Home} title="Login" />
      <PublicRoute path="/components" component={Components} title="Home" />

      <PrivateRoute path="/me" component={Profile} title="Profile" />
      <PrivateRoute path="/timeline" component={Timeline} title="Feed" />
      <PrivateRoute
        path="/profile/:userId"
        component={FriendsProfile}
        title="Friend Profile"
      />
    </Switch>
  </Router>
);

export default Routes;
