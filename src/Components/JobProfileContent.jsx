import React, { Component } from 'react';
import LocationIcon from '../Assets/Location.png';
import JobIcon from '../Assets/Job.png';
import WebsiteIcon from '../Assets/Website.png';
import CompanyLogo from '../Assets/IMG_4552.png';


class JobProfileContent extends Component{
    state = { }
    render(){
        return(
            <div class="col-lg-7 job-content mt-4">
                        {/* Top detail with logo */}
                        <div class="d-flex justify-content-around">
                            <div class="job_detail mt-4">
                                <header class="h3">Senior Packaging Designer</header>
                                <div class="d-flex ml-3 mt-4">
                                    <img src={LocationIcon} alt="location-company" class="job-detail-icon" />
                                    <p class="ml-3">Bole Street, Addis Abeba, Ethiopia</p>
                                </div>
                                <div class="d-flex ml-3">
                                    <img src={JobIcon} alt="type-job" class="job-detail-icon" />
                                    <p class="ml-3">Full Type Job</p>
                                </div>
                                <div class="d-flex ml-3">
                                    <img src={WebsiteIcon} alt="website-company" class="job-detail-icon" />
                                    <a href="..." class="ml-3">Website</a>
                                </div>
                            </div>
                            <div class="company-logo m-3 w-50" >
                                <img src={CompanyLogo} class="float-right" />
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        {/* <!-- End of Top detail with logo --> */}
                    
                        {/* <!-- Company General Information --> */}
                        <div class="d-flex justify-content-start">
                            <div class="mt-2 ml-3 w-50">
                                <header class="h4">General Info</header>
                                <div class="ml-4 mt-3">
                                    <p>Company Type: Large Organization</p>
                                    <p>Company Name: Mekelle University</p>
                                    <p>Industry: Educational Institution</p>
                                </div>
                            </div>
                            <div class="mt-5 ml-5">
                                <p>Size: 1000 - 2000 Employee</p>
                                <p>Founded: 1986</p>
                            </div>
                        </div>
                        <div class="dropdown-divider"></div>
                        {/* <!-- End of Company General Information --> */}

                        {/* <!-- Full Job Description --> */}
                        <div class="m-3">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <header class="h6">Requirement</header>
                            <ol>
                                <li>Requirement One</li>
                                <li>Requirement One</li>
                                <li>Requirement One</li>
                                <li>Requirement One</li>
                            </ol>
                        </div>
                        {/* <!-- End of Job Description --> */}

                        {/* <!-- Company Contact - How to Apply --> */}
                        <div class="m-3 bg-light">
                            <header class="h5 bg-primary text-light p-2">How To Apply</header>
                            <p class="p-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div class="dropdown-divider"></div>
                        {/* <!-- End of Company Contact - How to Apply --> */}

                        {/* <!-- Similar jobs --> */}
                        <div class="mt-5">
                            <header class="h4">Similar Jobs</header>
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
                                    <a class="btn btn-sm btn-primary w-100 view-detail-job-btn" href="JobDetail.html">View Detail</a>
                                </div>
                            </div>
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
                                    <a class="btn btn-sm btn-primary w-100 view-detail-job-btn" href="JobDetail.html">View Detail</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End of Similar jobs --> */}
                    </div>
        );
    }
}

export default JobProfileContent