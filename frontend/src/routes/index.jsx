import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Home, Login, Perfil, Components } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/components" component={Components} />

      <PrivateRoute path="/perfil" component={Perfil} />
    </Switch>
  </Router>
);

export default Routes;
