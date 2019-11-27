import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { Home, Profile, Timeline, Jobs, FriendsProfile } from 'pages';

const Routes = () => (
  <Router>
    <Switch>
      <PublicRoute exact path="/" exact component={Home} title="Login" />
      <PrivateRoute path="/profile" component={Profile} title="Profile" />
      <PrivateRoute exact path="/timeline" component={Timeline} title="Feed" />
      <PrivateRoute path="/jobs" component={Jobs} title="Jobs" />
      <PrivateRoute
        exact
        path="/profile/:userId"
        component={FriendsProfile}
        title="Friend Profile"
      />
    </Switch>
  </Router>
);

export default Routes;
