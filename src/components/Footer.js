import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Codenex Club. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="social-icon" />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

