import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import {ItemsContainer} from '../containers/Items';
import Login from '../containers/Login/Login';
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={ItemsContainer} />
         <Route exact path="/login" component={Login} />
     </Switch>
 );
 
 export default Routes;