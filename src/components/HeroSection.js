import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Codenex Club</h1>
        <p className="hero-subtitle">We are the tech club of SRM</p>
        <a href="#events" className="btn-primary">Join Us</a>
      </div>
    </section>
  );
};

export default HeroSection;
