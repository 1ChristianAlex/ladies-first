import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import {
  Home,
  Login,
  Profile,
  Components,
  Timeline,
  FriendsProfile
} from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Home} />
      <PublicRoute path="/login" component={Login} />
      <PublicRoute path="/components" component={Components} />

      <PublicRoute path="/me" component={Profile} />
      <PublicRoute path="/timeline" component={Timeline} />
      <PublicRoute path="/friends-profile" component={FriendsProfile} />
    </Switch>
  </Router>
);

export default Routes;
