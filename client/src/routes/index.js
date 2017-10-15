import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import {ItemsContainer} from '../containers/Items';
import Login from '../containers/Login/Login';
import Profile from '../containers/Profile/ProfileContainer'
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={ItemsContainer} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/profile/:userid" component={Profile} />
     </Switch>
 );
 
 export default Routes;