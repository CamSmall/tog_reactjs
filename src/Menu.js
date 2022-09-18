/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const MenuBar = () => {
  return (
    <nav class='deep-purple lighten-2'>
      <div class='nav-wraper'>
        <a href='https://localhost:3000' class='brand-logo center'>
          The Obsidian Grotto
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <a href='#'>Resource Packs</a>
          </li>
          <li>
            <a href='#'>Resumes</a>
          </li>
          <li>
            <a href='#'>Tools</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

class Menu extends Component {
  render() {
    return <MenuBar />;
  }
}

export default Menu;
