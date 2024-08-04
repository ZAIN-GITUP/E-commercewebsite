import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-black font-semibold py-4 w-full">
      <div className="containers mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>ZAINULABDIN &copy; {new Date().getFullYear()} | All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/zain-ul-abdin-ghani15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900"
          >
            <FontAwesomeIcon icon={faGlobe} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
