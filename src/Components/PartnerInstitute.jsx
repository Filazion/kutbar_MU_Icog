import React, { Component } from 'react';
import Nav from './HomeNav_WithoutSearch';
import Sidebar from './Home_Sidebar';
import PartnerCompanyList from './PartnerCompanyList';
import Advert from './Advert';

class PartnerInstitute extends Component{
    state = { }
    render(){
        return(
            <div class="default-header">
                <Nav />
                <div class="container-fluid mt-3">
                    <div class="row mx-0 mx-md-0 mx-sm-0 mb-4">
                        <Sidebar />
                        <PartnerCompanyList />
                        <Advert />
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerInstitute;