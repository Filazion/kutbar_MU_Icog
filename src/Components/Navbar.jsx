import React, { Component } from 'react';
import '../Components/SignninModal.jsx';



class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="navbar navbar-expand navbar-expand-sm navbar-light sticky-top fixed-top">
                <div class="navbar-wrapper mt-5 ml-5 ml-xl-5">
                    <a class="navbar-brand text-black-50" href="../index.php">KUTBAR<span class="h6">.COM</span></a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse mt-5 mr-lg-5 mr-md-3 mr-sm-0 mr-xl-5" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item active mr-4">
                            <a class="nav-link" href="#Home" id="Nav_Home_Link">Home</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a class="nav-link" href="#news" id="Nav_News_Link" onclick="News_Link_Btn();">News</a>
                        </li>
                        <li class="nav-item mr-4">
                            <a class="nav-link" href="#service" id="Nav_Service_Link">Our Services</a>
                        </li>
                        <li class="nav-item mr-5 mr-md-0 mt-1">
                            <a class="nav-link btn btn-sm text-light btn-landing-signin pt-1 pb-1 pl-4 pr-4" href=".signin_modal" data-toggle="modal">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Navbar;