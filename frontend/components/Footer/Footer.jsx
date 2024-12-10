import React from 'react';
import './Footer.css';
import asset28 from '../assets/asset 28.png';
import asset29 from '../assets/asset 29.png';
import asset30 from '../assets/asset 30.png';
import asset31 from '../assets/asset 31.png';

const Footer = () => {
  return (
    <div className="subfooter">
      <div className="container">
        <div className="subfooter-container flex">
          <a href="#" className="hover-links">Privacy policy</a>
          <a href="#" className="hover-links">Terms & conditions</a>
          <a href="#" className="hover-links">Security information</a>
          <a href="#" className="hover-links">
            <img src={asset28} alt="facebook logo" />
          </a>
          <a href="/" className="hover-links">
            <img src={asset29} alt="skype logo" />
          </a>
          <a href="/" className="hover-links">
            <img src={asset30} alt="linked-in logo" />
          </a>
          <a href="/" className="hover-links">
            <img src={asset31} alt="youtube logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
