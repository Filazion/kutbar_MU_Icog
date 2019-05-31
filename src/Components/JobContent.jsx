import React, { Component } from 'react';
import Sidebar from './Home_Sidebar';
import Nav from './HomeNav_WithoutSearch';
import JobList from './JobList';
import Advert from './Advert';

class JobContent extends Component{
    state = { }
    render(){
        return(
            <div class="default-header">
                <Nav />
                <div class="container-fluid mt-3">
                    <div class="row mx-0 mx-md-0 mx-sm-0 mb-4">
                        <Sidebar />
                        <JobList />
                        <Advert />
                    </div>
                </div>
            </div>
        );
    }
}

export default JobContent