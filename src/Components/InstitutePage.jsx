import React, { Component } from 'react';
import InstitutionProfileHeader from './InstitutionProfileHeader';
import CompanyNavigation from './CompanyNavigation';
import CompanyContent from './CompanyContent';
import SimilarCompanyList from './SimilarCompanyList';
import Nav from './HomeNav_WithoutSearch';

class InstitutePage extends Component{
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
                            <CompanyContent />
                        </div>
                        <SimilarCompanyList />
                    </div>
                </div>
            </div>
        );
    }
}

export default InstitutePage