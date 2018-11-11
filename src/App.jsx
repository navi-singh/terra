import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Template from './components/templates/Template';
import IframeContainer from './components/templates/IframeContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="appContainer -webkit-fill-available">
          <Navbar />
          <div className="spacer"></div>
          <div className="bodyContainer">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/service/templates" component={Template} />
            <Route path="/Iframe" component={IframeContainer} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
