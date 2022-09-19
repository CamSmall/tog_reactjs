import React, { Component } from 'react';
import Menu from './Menu';
import CreativeContent from './CreativeContent';

class App extends Component {
  render() {
    return (
      <div className='content-wrapper'>
        <Menu />
        <div class='section'></div>
        <div class='container'>
          <div class='section'>
            <h1 class='center'>You have entered the Obsidian Grotto.</h1>
          </div>
          <div class='section'>
            <CreativeContent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
