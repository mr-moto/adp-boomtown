import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import {ItemsContainer} from '../containers/Items';
import Login from '../containers/Login/Login';
import Profile from '../containers/Profile/ProfileContainer'
import {NotFound} from '../containers/NotFound'
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={ItemsContainer} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/profile/:userid" component={Profile} />
         <Route exact path="/share" component={Share} />;
         <Route path="*" component={NotFound}/>
     </Switch>
 );
 
 export default Routes;