import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PrivateRoute path="/perfil" component={Perfil} />
    </Switch>
  </Router>
);

export default Routes;
