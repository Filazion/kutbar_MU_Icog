import React, { Component } from 'react';
import CompanyLogo from '../Assets/IMG_20181229_164003_399.jpg';


class SimilarCompanyList extends Component{
    state = { }
    render(){
        return(
            <div class="col-lg-3 similar-company-list">
                        <div class="">
                            <header class="h5 pl-3 pt-3 pr-3 pb-1">Similar Institution
                                <div class="dropdown-divider"></div>
                            </header>
                            <div class="pl-3">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <img src={CompanyLogo} alt="company-logo" class="w-100" />
                                    </div>
                                    <div class="col-lg-8">
                                        <header class="h6 mt-3">Admas University</header>
                                        <p>HQ: Addis Abeba, Ethiopia</p>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <img src={CompanyLogo} alt="company-logo" class="w-100" />
                                    </div>
                                    <div class="col-lg-8">
                                        <header class="h6 mt-3">Admas University</header>
                                        <p>HQ: Addis Abeba, Ethiopia</p>
                                    </div>
                                </div>
                                <div class="dropdown-divider"></div>

                            </div>
                        </div> 
                    </div>
        );
    }
}

export default SimilarCompanyList