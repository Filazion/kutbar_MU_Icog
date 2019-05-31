import React, { Component } from 'react';
import JobDetailProfile from './JobDetailProfile';

class JobDetail extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <main>
                    <JobDetailProfile />
                </main>
            </React.Fragment>
         );
    }
}
 
export default JobDetail;