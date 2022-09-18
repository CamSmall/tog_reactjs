import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className='generic-container'>
        <Menu />
        <div class='container'>
          <div class='section'>
            <h1 class='center'>You've entered the grotto.</h1>
          </div>
          <div class='section'>
            <p>Content</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
