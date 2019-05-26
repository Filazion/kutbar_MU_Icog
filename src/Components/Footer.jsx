import React, { Component } from 'react';
import linkdin from '../Assets/linkdin_icon.png';
import fb from '../Assets/fb_icon.png';
import twitter from '../Assets/twitter_icon.png';
import Youtube from '../Assets/youtube_icon.png';
import instagram from '../Assets/instagram_icon.png';


class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer class="footer">
                <div class="row text-light mx-0">
                    <div class="col-lg-3 brading_footer">
        <header class="h2 text-uppercase">kutbar.com</header>
        <p class="">Innovation\'s That Last For Generation\'s</p>
        <p class="mt-4">We Present Professional Architectural Platform for  Ethiopians in the fields of Architecture and Real Estate by incorporating Students, Experts, Companies, Universities and Associations.</p>
        <small class="text-uppercase mt-5"> &copy; COPYRIGHT - 2019 |  <a class="footer-links text-light" href="...">Privacy Policy</a> | <a class="footer-links text-light" href="...">Term and Condition</a></small>
    </div>
    <div class="col-lg-3 contact_footer">
        <header class="h5 text-uppercase">Contact Us</header>
        <p class="">
        Main Office Address<br/>
        Bole Main Road, Friendship Building,
        Bole, Addis Abeba,
        Ethiopia.</p>
        <header class="h5 text-uppercase">Email</header>
        <p>kutbar_ethiopia@gmail.com</p>
        <small class="text-uppercase mt-4 d-flex">
            <a href="..."><img src={fb} class="w-50 mr-3 mt-1" alt="Facebook Icon" /></a>
            <a href="..."><img src={instagram} class="w-50 mr-3" alt="Instagram Icon" /></a>
            <a href="..."><img src={linkdin} class="w-50 mr-3 mt-1" alt="Linkdin Icon" /></a>
            <a href="..."><img src={Youtube} class="w-50 mr-3 mt-1" alt="Youtube Icon" /></a>
            <a href="..."><img src={twitter} class="w-50 mr-3 mt-1" alt="Twitter Icon" /></a>
        </small>
    </div>
    <div class="col subscribtion align-self-center">
        <header class="h5 text-uppercase ">Subscribe</header>
        <form method="" action="" class="mt-4">
            <div class="form-group">
                <input class="form-control border-0" type="email" name="subscribe-email" placeholder="Enter Your Email" />
                <input class="btn btn-light text-primary mt-3" value="SUBSCRIBE"  />
            </div>
        </form>
    </div>
    </div>
</footer>
         );
    }
}
 
export default Footer;