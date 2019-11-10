import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Home, Profile, Components, Timeline, FriendsProfile } from '../pages';

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute path="/" exact component={Home} />
      <PublicRoute path="/components" component={Components} />

      <PrivateRoute path="/me" component={Profile} />
      <PrivateRoute path="/timeline" component={Timeline} />
      <PrivateRoute path="/friends-profile" component={FriendsProfile} />
    </Switch>
  </Router>
);

export default Routes;
