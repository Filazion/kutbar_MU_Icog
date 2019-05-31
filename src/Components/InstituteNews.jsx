import React, { Component } from 'react';
import InstitutionProfileHeader from './InstitutionProfileHeader';
import CompanyNavigation from './CompanyNavigation';
import NewsContent from './NewsContent';
import SimilarCompanyList from './SimilarCompanyList';
import Nav from './HomeNav_WithoutSearch';

class InstituteNews extends Component{
    state = { }
    render(){
        return(
            <div class="default-header">
                <Nav />
                <div class="container-fluid mt-3">
                    <div class="row mx-0 mx-md-0 mx-sm-0 mb-4">
                        <div class="col-lg-9 comapny-content">
                            <InstitutionProfileHeader />
                            <CompanyNavigation />
                            <NewsContent />
                        </div>
                        <SimilarCompanyList />
                    </div>
                </div>
            </div>
        );
    }
}

export default InstituteNews