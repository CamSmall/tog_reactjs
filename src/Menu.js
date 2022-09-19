/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import logo from './media/ObsidianGrottoLogo.png';

const MenuBar = () => {
  return (
    <div id='navbar-wrapper'>
      <nav class='black'>
        <div class='nav-wraper'>
          <a href='https://localhost:3000' class='brand-logo center'>
            <img src={logo} alt='The Obsidian Grotto'></img>
          </a>
          <ul id='nav-mobile' class='right hide-on-med-and-down'>
            <li>
              <a href='#'>Creative Content</a>
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
