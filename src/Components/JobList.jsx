import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '../Assets/rate.png';

class JobList extends Component{
    state = { }
    render(){
        return(
            <div class="col-lg-7 job-content">
                        {/* Search inline form */}
                        <form class="form-inline ml-3 mt-2" method="" action="">
                            <div class="form-group">
                                <input type="text" placeholder="Search Job and Compietion" class="form-control form-control-sm" />
                            </div>
                            <div class="form-group ml-3">
                                <select class="form-control form-control-sm">
                                    <option value="all">All</option>
                                    <option value="Organization">Organization</option>
                                    <option value="Field">Field</option>
                                    <option value="location">Location</option>
                                </select>
                            </div>
                            <input type="submit" class="btn btn-primary btn-sm ml-4" value="Search" />
                        </form>
                        {/* End of Search Form */}
                        {/* Job Posts */}
                        <div class="container mt-5">
                            <div class="row mt-4">
                                <div class="col-lg-2">
                                    <img src={CompanyLogo} alt="Company Logo" class="w-100" />
                                </div>
                                <div class="col-lg-4">
                                    <header class="h5">Senior Packaging Designer - High End Drinking Brand</header>
                                    <p>Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>Salary: 5,000 ETB - 10,000 ETB</p>
                                    <p>Date Submitted: 2 April, 2019</p>
                                    <p>Application Close: 30 April, 2019</p>
                                </div>
                                <div class="col-lg-2">
                                    <Link class="btn btn-sm btn-primary w-100 view-detail-job-btn" to={{pathname:'./JobDetail'}}>View Detail</Link>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="row mt-4">
                                <div class="col-lg-2">
                                    <img src={CompanyLogo} alt="Company Logo" class="w-100" />
                                </div>
                                <div class="col-lg-4">
                                    <header class="h5">Senior Packaging Designer - High End Drinking Brand</header>
                                    <p>Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>Salary: 5,000 ETB - 10,000 ETB</p>
                                    <p>Date Submitted: 2 April, 2019</p>
                                    <p>Application Close: 30 April, 2019</p>
                                </div>
                                <div class="col-lg-2">
                                    <a class="btn btn-sm btn-primary w-100 view-detail-job-btn" href="...">View Detail</a>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="row mt-4">
                                <div class="col-lg-2">
                                    <img src={CompanyLogo} alt="Company Logo" class="w-100" />
                                </div>
                                <div class="col-lg-4">
                                    <header class="h5">Senior Packaging Designer - High End Drinking Brand</header>
                                    <p>Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>Salary: 5,000 ETB - 10,000 ETB</p>
                                    <p>Date Submitted: 2 April, 2019</p>
                                    <p>Application Close: 30 April, 2019</p>
                                </div>
                                <div class="col-lg-2">
                                    <a class="btn btn-sm btn-primary w-100 view-detail-job-btn" href="...">View Detail</a>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                            <div class="row mt-4">
                                <div class="col-lg-2">
                                    <img src={CompanyLogo} alt="Company Logo" class="w-100" />
                                </div>
                                <div class="col-lg-4">
                                    <header class="h5">Senior Packaging Designer - High End Drinking Brand</header>
                                    <p>Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="col-lg-4">
                                    <p>Salary: 5,000 ETB - 10,000 ETB</p>
                                    <p>Date Submitted: 2 April, 2019</p>
                                    <p>Application Close: 30 April, 2019</p>
                                </div>
                                <div class="col-lg-2">
                                    <a class="btn btn-sm btn-primary w-100 view-detail-job-btn" href="...">View Detail</a>
                                </div>
                            </div>
                            <div class="dropdown-divider"></div>
                        </div>
                        {/* End of job Posts */}
                    </div>
        );
    }
}

export default JobList