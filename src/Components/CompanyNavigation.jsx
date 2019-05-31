import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CompanyNavigation extends Component{
    state = { }
    render(){
        return(
            <div class="d-flex mt-5 companny-nav">
                <Link class="nav-link w-25 text-center active" to={{pathname:'/institutePage'}}>
                    Profile
                </Link>
                <Link class="nav-link w-25 text-center" to={{pathname:'/instituteNews'}}>
                    News
                </Link>
                <a class="nav-link w-25 text-center" href="InstitutionJobPage.php">
                    Jobs and Competition
                </a>
                <a class="nav-link w-25 text-center" href="InstitutionContact.php">
                    Contact
                </a>
            </div>
        );
    }
}

export default CompanyNavigation