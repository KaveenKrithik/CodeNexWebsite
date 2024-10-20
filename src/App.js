import React from 'react';
import HeroSection from './components/HeroSection';
import EventsSection from './components/EventsSection';
import CallToAction from './components/CallToAction';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import './App.css'; 

const App = () => {
  return (
    <div className="app">
      <header className="navbar">
        <nav className="nav-links">
          <a href="#home" className="nav-item">HOME</a>
          <a href="#team" className="nav-item">TEAM</a>
          <a href="#course" className="nav-item">COURSE</a>
          <a href="#newsletter" className="nav-item">NEWSLETTER</a>
          <a href="#contact" className="nav-item">CONTACT</a>
        </nav>
      </header>
      <HeroSection />
      <AboutUs />
      <EventsSection />
      <CallToAction />
      <SignupPage />
      <Footer />
  
    </div>
  );
};

export default App;


