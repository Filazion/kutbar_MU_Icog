import React, { Component } from 'react';
import CompanyLogo from '../Assets/IMG_4552.png';
import Facebook from '../Assets/Facebook.png';
import Instagram from '../Assets/Instagram.png';
import Youtube from '../Assets/YouTube.png';
import Twitter from '../Assets/Twitter.png';

class InstitutionProfileHeader extends Component{
    state = { }
    render(){
        return(
            <div class="card">
                <div class="row">
                    <div class="col-lg-2 p-4">
                        <img src={CompanyLogo} class="w-100" />
                    </div>
                    <div class="col-lg-4 pt-5 mt-2">
                        <header class="h3">Mekelle University</header>
                        <p>Educational Institution in Teaching And Learning</p>
                        <a class="btn btn-sm btn-primary text-light message-btn" href="...">Message</a>
                    </div>
                    <div class="col-lg-1">
                        <div class="dropdown-divider mt-4 float-right"></div>
                    </div>
                    <div class="col-lg-5 row p-4">
                        <div class="col-lg-4 font-weight-bold">
                            <p>Size:</p>
                            <p>Location:</p>
                            <p>Founded:</p>
                            <small class="text-uppercase mt-4 d-flex">
                                <a href="..."><img src={Facebook} class="mr-4 social-icons" alt="Facebook Icon" /></a>
                                <a href="..."><img src={Instagram} class="mr-4 social-icons" alt="Instagram Icon" /></a>
                                <a href="..."><img src={Youtube} class="mr-4 social-icons" alt="Youtube Icon" /></a>
                                <a href="..."><img src={Twitter} class="mr-4 social-icons" alt="Twitter Icon" /></a>
                            </small>
                        </div>
                        <div class="col-lg-6">
                            <p>1000  - 2000 Employee</p>
                            <p>Addis Abeba, Ethiopia</p>
                            <p>1986 ET</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstitutionProfileHeader