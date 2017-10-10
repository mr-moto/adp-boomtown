import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
 
import Items from '../containers/Items/Items';
import Login from '../containers/Login/Login';
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={Items} />
         <Route exact path="/login" component={Login} />
     </Switch>
 );
 
 export default Routes;