/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './media/images/ObsidianGrottoLogo.png';

const MenuBar = () => {
  return (
    <div className='navbar-fixed'>
      <nav className='black'>
        <div className='nav-wraper'>
          <a href='#' className='brand-logo center'>
            <img src={logo} alt='The Obsidian Grotto'></img>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='#creative-wrapper'>Creative Content</a>
            </li>
            <li>
              <a href='#'>Professional Resources</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

class Menu extends Component {
  render() {
    return <MenuBar />;
  }
}

export default Menu;
