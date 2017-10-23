import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
import {ItemsContainer} from '../containers/Items'
import {Login} from '../containers/Login'
import {Profile} from '../containers/Profile'
import {NotFound} from '../containers/NotFound'
import {ShareContainer} from '../containers/Share'
 
 const Routes = () => (
     <Switch>
         <Route exact path="/" component={ItemsContainer} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/profile/:id" component={Profile} />
         <Route exact path="/share" component={ShareContainer} />;
         <Route path="*" component={NotFound}/>
     </Switch>
 );
 
 export default Routes;