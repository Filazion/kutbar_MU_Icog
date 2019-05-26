import React, { Component } from 'react';
import Navbar from './Components/Navbar.jsx';
import Landing from './Components/Landing.jsx'
import Footer from './Components/Footer.jsx';
import './App.css';
import '../src/Css/style.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <header>
        <Navbar/>
       </header>
       <main>
       <Landing/>
       </main>
         <Footer/>
      </div>
    );
  }
}

export default App;