import React, { Component } from 'react';
import Sidebar from './Home_Sidebar';
import Nav from './HomeNav_WithoutSearch';
import Content from './JobProfileContent';
import Advert from './Advert';

class JobDetailProfile extends Component{
    state = { }
    render(){
        return(
            <div class="default-header">
                <Nav />
                <div class="container-fluid mt-3">
                    <div class="row mx-0 mx-md-0 mx-sm-0 mb-4">
                        <Sidebar />
                        <Content />
                        <Advert />
                    </div>
                </div>
            </div>
        );
    }
}

export default JobDetailProfile