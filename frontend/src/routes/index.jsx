import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Home, Login, Perfil } from '../pages';

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
