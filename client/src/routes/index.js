import React from "react";
import { Switch, Route } from "react-router-dom";

import { ItemsContainer } from "../containers/Items";
import { Login } from "../containers/Login";
import LoginContainer from "../containers/Login";
import { Profile } from "../containers/Profile";
import { NotFound } from "../containers/NotFound";
import { ShareContainer } from "../containers/Share";
import PrivateRoute from '../components/PrivateRoute';

// login doesnt seem to work on login. props wernt being passed down to child component( Login ). Had to load container component first -> /login2 path.

const Routes = () => (
    <Switch>
        <PrivateRoute exact path="/" component={ItemsContainer} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login2" component={LoginContainer} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/share" component={ShareContainer} />;
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Routes;
