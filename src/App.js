import React, { Component } from 'react';
import './App.css';
import Splash from './splash/Splash';
import About from './about/About';
import Menu from './menu/Menu';
import Gallery from './gallery/Gallery';
import Contact from './contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Splash />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
