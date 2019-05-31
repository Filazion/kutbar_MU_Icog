import React, { Component } from 'react';
import ServicePortfolio from '../Assets/images (20).png';
import ServiceRealEstate from "../Assets/images (19).png";
import ServiceForum from '../Assets/images (18).png';
import ServiceJob from '../Assets/images (17).png';


class LandingService extends Component{
    state = { }
    render(){
        return(
            <div>
                {/* Service Header */}
                <div id="service"></div>
                <div class="mx-auto services" id="">
                    <div class="sub-page-sub-topic text-center">
                        <header class="h3 text-primary text-uppercase ">Our Services</header>
                        <div class="dropdown-divider"></div>
                    </div>  
                </div>
                {/* End of Service Header */}
                {/* Service Post */}
                <div class="mx-auto mt-5 container serive_posts">
                    <div class="row mx-0">
                        <div class="card-deck">
                            <div class="card">
                                <img src={ServicePortfolio} alt="" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary text-center text-uppercase">portfolio organization</h5>
                                    <p class="card-text">Our platform serves as a portfolio organization tool for saving all your necessary files. </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={ServiceRealEstate} alt="" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary text-center text-uppercase">REAL - ESTATE BROKER</h5>
                                    <p class="card-text">Our platform gives you the necessary information regarding buying and selling, renting apartments and  real-estate</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={ServiceForum} alt="" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary text-center text-uppercase">FOREUM</h5>
                                    <p class="card-text">We provide an experience sharing service with students, employees and experts </p>
                                </div>
                            </div>
                            <div class="card">
                                <img src={ServiceJob} alt="" class="card-img-top" />
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary text-center text-uppercase">JOB AND COMPITIONS</h5>
                                    <p class="card-text">We provide an job and various competitions locally for Ethiopians.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Service Post */}
            </div>
        );
    }
}

export default LandingService;