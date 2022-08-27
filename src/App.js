import React, { Component } from 'react';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Menu />
        <h1>Title</h1>
        <p>Content</p>
      </div>
    );
  }
}

export default App;
