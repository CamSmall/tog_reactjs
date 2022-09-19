/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './media/ObsidianGrottoLogo.png';

const MenuBar = () => {
  return (
    <div id='navbar-fixed'>
      <nav className='black'>
        <div className='nav-wraper'>
          <a href='https://localhost:3000' className='brand-logo center'>
            <img src={logo} alt='The Obsidian Grotto'></img>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#'>Creative Content</a>
            </li>
            <li>
              <a href='#'>Professional Resources</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='dropdown-content' id='creative-dropdown'></ul>
    </div>
  );
};

class Menu extends Component {
  render() {
    return <MenuBar />;
  }
}

export default Menu;
