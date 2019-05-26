import React, { Component } from 'react';
import Navbar from './Navbar';
import Create_Account from './Create_Account';
import Footer from './Footer';

class Create extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <header><Navbar/></header>
            <main><Create_Account /></main>
            <Footer/>
        </React.Fragment>
         );
    }
}
 
export default Create;