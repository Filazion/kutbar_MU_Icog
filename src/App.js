import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx';
import Footer from './Components/Footer.jsx';
import LandingNews from './Components/LandingNews.jsx';
import LandingService from './Components/LandingService.jsx';
import SigninModal from './Components/SignninModal.jsx';

import './App.css';
import '../src/Css/Style.css';
// import '../src/Js/Main.js';


class App extends Component {
  render() {
    return (
      <div className="App LandingPage">
       <header>
        <Navbar/>
       </header>
       <main>
         <div className="index-main-content" id="Home">
            <Landing/>
            <LandingNews/>
            <LandingService/>
         </div>
       </main>
       <Footer/>

       {/* Modal */}
       <SigninModal/>
      </div>
    );
  }
}

export default App;