import React, { Component } from 'react';
import NewsImage from '../Assets/images (15).png';
import NewsImage2 from '../Assets/images (16).png';
import { Link } from 'react-router-dom';

class LandingNews extends Component{
    state = { }
    render(){
        return(
            <div className="text-left">
                <div id="news"></div>
                {/* News Header */}
                <div class="mx-auto news" id="">
                    <div class="sub-page-sub-topic text-center">
                        <header class="h3 text-primary text-uppercase ">NEWS</header>
                        <div class="dropdown-divider"></div>
                    </div>  
                </div>
                {/* End of News Header */}
                {/* Newss Posts */}
                <div class="mx-auto mt-5 mb-5">
                    <div class="row mx-0">
                        <div class="col-lg-6 container">
                            <img src={NewsImage} alt="Trading News" class="w-100" />
                        </div>
                        <div class="col-lg-5 Tranding_Sub_News pl-4 pt-2">
                            <div class="row mb-3">
                                <div class="d-flex">
                                    <img src={NewsImage2} class="w-50 mr-3" />
                                    <div class="News_Decstiption mt-2">
                                        <small class="text-primary">April 15, 2019</small>
                                        <header class="h5 text-black">Masters Degree Launched In SE in Mekelle University</header>
                                        <small class="text-black text-muted mb-0 posted_by">Posted by <a class="text-black text-muted " href="...">Mekelle University</a></small>
                                    </div>
                                </div>
                            </div> 
                            <div className="row mb-3">
                                <div class="d-flex">
                                    <img src={NewsImage2} class="w-50 mr-3" />
                                    <div class="News_Decstiption mt-2">
                                        <small class="text-primary">April 15, 2019</small>
                                        <header class="h5 text-black">Masters Degree Launched In SE in Mekelle University</header>
                                        <small class="text-black text-muted posted_by">Posted by <a class="text-black text-muted" href="...">Mekelle University</a></small>
                                    </div>
                                </div>
                            </div> 
                            <div class="row mb-3">
                                <div class="d-flex">
                                    <img src={NewsImage2} class="w-50 mr-3" />
                                    <div class="News_Decstiption mt-2">
                                        <small class="text-primary">April 15, 2019</small>
                                        <header class="h5 text-black">Masters Degree Launched In SE in Mekelle University</header>
                                        <small class="text-black text-muted posted_by">Posted by <a class="text-black text-muted" href="...">Mekelle University</a></small>
                                    </div>
                                </div>
                            </div> 
                            <div class="row">
                                <Link class="text-primary text-uppercase view_all_news_link" to={{pathname:'/create_kutbar_account'}}>View All News ...</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of News Posts */}
            </div>
        );
    }
}

export default LandingNews;