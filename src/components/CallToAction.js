import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">Ready to Code?</h2>
      <p className="cta-subtitle">Join the community of developers pushing the boundaries of technology.</p>
      <a href="#join" className="btn-cta">Get Started</a>
    </section>
  );
};

export default CallToAction;
