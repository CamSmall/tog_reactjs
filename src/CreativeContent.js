/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import enderpears from './media/images/enderpears.png';
import enderpeardownload from './downloads/Ender Pears 1.19.zip';
import butterdownload from "./downloads/I'm pretty sure that's just butter.zip";

const Content = () => {
  return (
    <div id='creative-wrapper'>
      <div className='row'>
        <h3 className='center'>My Creative Content</h3>
        <h5 className='center'>
          I've made some pretty cool stuff (if I do say so myself). Here's some
          of it that you're welcome to check out!
        </h5>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <div className='card teal darken-4'>
            <div className='card-image'>
              <img
                src={enderpears}
                alt='Example of the Ender Pear resource pack.'></img>
            </div>
            <div className='card-content white-text'>
              <span className='card-title'>Ender Pears</span>
              <p>
                Ender Pears is a simple Minecraft Resource Pack that I made a
                few years ago. TL;DR I was typing out "Ender Pearls" on a sign
                but it was one character too long, so I took out the "l" and
                thought "Ender Pears" was pretty funny. Turns out it's pretty
                cute as a resource pack! "Ender Pears" changes the item textures
                for Ender Pearls and Eyes of Ender into Ender Pears and Pears of
                Ender, as well as updating the names for these items too. That's
                all!
              </p>
            </div>
            <div className='card-action'>
              <a href={enderpeardownload} download>
                Download
              </a>
            </div>
          </div>
        </div>

        <div className='col s12 m6'>
          <div className='card teal darken-4'>
            <div className='card-content white-text'>
              <span className='card-title'>
                I'm pretty sure that's just butter...
              </span>
              <p>
                "I'm pretty sure that's just butter..." is a resource pack I've
                wanted to make for a long time now. All it does is update the
                names of various items to more accurately reflect what the item
                actually is. Mojang has been trying to tell us that it's
                actually gold ingots and armor and whatnot in the game, but I'm
                pretty sure we all know it's Butter, so why kid ourselves?
              </p>
            </div>
            <div className='card-action'>
              <a href={butterdownload} download>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class CreativeContent extends Component {
  render() {
    return <Content />;
  }
}

export default CreativeContent;
