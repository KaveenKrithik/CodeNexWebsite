import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [collegeMail, setCollegeMail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Signup Attempt', { name, regNo, collegeMail, phoneNumber });
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        <h2 className="signup-title">JOIN US</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-input-group">
            <label htmlFor="name" className="signup-label">Name</label>
            <input
              type="text"
              id="name"
              className="signup-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label htmlFor="regNo" className="signup-label">Reg No</label>
            <input
              type="text"
              id="regNo"
              className="signup-input"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label htmlFor="collegeMail" className="signup-label">College Mail</label>
            <input
              type="email"
              id="collegeMail"
              className="signup-input"
              value={collegeMail}
              onChange={(e) => setCollegeMail(e.target.value)}
              required
            />
          </div>

          <div className="signup-input-group">
            <label htmlFor="phoneNumber" className="signup-label">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              className="signup-input"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-signup">Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
