import React, { Component } from 'react';
import CreateRequestImage from '../Assets/social-media-services-1418321-1195169.png';


class createRequest extends Component{
    state = { }
    render(){
        return(
            <div class="main-content">
                <img src={CreateRequestImage} alt="Create Account Request Image" class="w-25" />
                <header class="h2 text-uppercase text-primary">Create your kutbar account</header>
                <p class="text-black">In order to get the best out of this website, Please create a KUTBAR account for free and make your life easy.</p>
                <a class="btn btn-primary text-uppercase text-light create_ac_btn">Create Account</a>
            </div>
        );
    }
}

export default createRequest;