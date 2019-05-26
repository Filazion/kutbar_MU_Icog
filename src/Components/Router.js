import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import create from './Create';



const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/create" component={create} />
    </Switch>
    </BrowserRouter>
); 
export default Router;