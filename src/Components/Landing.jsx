import React, { Component } from 'react';
import landingimage from '../Assets/Landing_Image.png';
import { Link } from 'react-router-dom';


class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="text-left" id="">
                <div class="d-flex justify-content-around" id="">
                    <div class="col-lg-8 col-md-6 w-100">
                        <img src={landingimage} alt="Landing Kutbar Icon" class="Landing_Image w-75" />
                    </div>
                    <div class="col-lg-4 col-md-6 mx-auto">
                        <div class="row ml-lg-3">
                            <div class="col">
                                <div class="row">
                                    <div class="display-4 Page-Title">KUTBAR<span class="h3">.COM</span></div>
                                </div>
                                <div class="row">
                                    <div class="card-title">Innovation's That Last For Generation's</div>
                                </div>
                                <div class="row">
                                    <div class="card-text my-3 w-75">
                                        <p>An Architectural Social Network which solves
                                        most of the problems faced by architects,
                                        real-estate developers, students, teachers,
                                        universities and provides a warm environment
                                        for an incrediable development of Ethiopian
                                        architecture.</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <Link class="btn btn-md btn-primary btn-landing-create text-uppercase text-light" to={{pathname:'/create'}}>
                                        Create Account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Landing;