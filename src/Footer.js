/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

const FooterComponent = () => {
  return (
    <div className='footer-wrapper'>
      <footer className='page-footer black'></footer>
    </div>
  );
};

class Footer extends Component {
  render() {
    return <FooterComponent />;
  }
}

export default Footer;
