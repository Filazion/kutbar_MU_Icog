import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import App from '../App';
import create from './Create';
import create_Account_Request from './Create_Account_Request';
import JobAndComp from './JobAndComp';
import JobDetail from './JobDetail';
import Commpany from './Company';
import Institutes from './InstitutePage';
import InstituteNews from './InstituteNews';


const Router=() =>(
    <BrowserRouter>
    <Switch>
        <Route path="/" component={App} exact/>
        <Route path="/create" component={create} />
        <Route path="/create_kutbar_account" component={create_Account_Request}/>
        <Route path="/job_and_compition" component={JobAndComp} />
        <Route path="/JobDetail" component={JobDetail} />
        <Route path="/Company" component={Commpany} />
        <Route path="/institutePage" component={Institutes} />
        <Route path="/instituteNews" component={InstituteNews} />
    </Switch>
    </BrowserRouter>
); 

export default Router;