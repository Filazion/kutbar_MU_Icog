import React, { Component } from 'react';
import Navbar from './Navbar';
import CreateRequests from './createRequest';

class Create_Request extends Component{
    state = { }
    render(){
        return(
            <React.Fragment>
                <div class="LandingPage">
                    <header>
                        <Navbar/>
                    </header>
                    <main>
                        <CreateRequests />
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

export default Create_Request