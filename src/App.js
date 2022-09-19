import React, { Component } from 'react';
import Menu from './Menu';
import CreativeContent from './CreativeContent';

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
        </div>
      </div>
    );
  }
}

export default App;
