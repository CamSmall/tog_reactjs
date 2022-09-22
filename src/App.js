import React, { Component } from 'react';
import Menu from './Menu';
import CreativeContent from './CreativeContent';
import ProfessionalContent from './ProfessionalContent';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className='content-wrapper'>
        <Menu />
        <div className='section'></div>
        <div className='container'>
          <div className='section'>
            <h1 className='center'>You have entered the Obsidian Grotto.</h1>
          </div>
          <div className='divider'></div>
          <div className='section'>
            <CreativeContent />
          </div>
          <div className='divider'></div>
          <div className='section'>
            <ProfessionalContent />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
