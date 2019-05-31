import React, { Component } from 'react';
import JobContent from './JobContent';

class JobAndComp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <main>
                    <JobContent />
                </main>
            </React.Fragment>
         );
    }
}
 
export default JobAndComp;