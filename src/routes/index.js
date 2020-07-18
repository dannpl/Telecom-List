import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './../pages/Home';
import Profile from './../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Redirect exact to="/phones" from="/" />

      <Route path="/phones" exact component={Home} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  );
}
