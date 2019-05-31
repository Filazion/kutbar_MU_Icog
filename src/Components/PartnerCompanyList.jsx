import React, { Component } from 'react';
import CompanyLogo from '../Assets/IMG_4552.png';
import { Link } from 'react-router-dom';

class PartnerCompanyList extends Component{
    state = { }
    render(){
        return(
            <div class="col-lg-7 job-content">

                        {/* <!-- Search inline form --> */}
                        <form class="form-inline ml-3 mt-2" method="" action="">
                            <div class="form-group">
                                <input type="text" placeholder="Search Companies And Institutions" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group ml-3">
                                <select class="form-control form-control-sm">
                                    <option value="all">All</option>
                                    <option value="Organization">Organization</option>
                                    <option value="type">Type</option>
                                    <option value="location">Location</option>
                                </select>
                            </div>
                            <input type="submit" class="btn btn-primary btn-sm ml-4" value="Search" />
                        </form>
                        {/* <!-- End of Search Form --> */}

                        {/* <!-- Company lists --> */}
                        <div class="container mt-5">
                            <div class="row mt-4">
                                <div class="col-lg-2">
                                    <img src={CompanyLogo} alt="Company Logo" class="w-100" />
                                </div>
                                <div class="col-lg-4">
                                    <header class="h5">Mekelle University</header>
                                    <p>Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>Type: Educational Institution</p>
                                    <p>Size: 1000 - 2000 Employee </p>
                                    <p>Focus: Teaching</p>
                                </div>
                                <div class="col-lg-2">
                                    <Link class="btn btn-sm btn-primary w-100 view-detail-job-btn" to={{pathname:'/institutePage'}}>Go To Page</Link>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                        </div>
                        {/* <!-- End of Company Lists --> */}
                    </div>
        );
    }
}

export default PartnerCompanyList

