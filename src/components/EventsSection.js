import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
  return (
    <section id="events" className="events-section">
      <div className="events-container">
        <h2 className="events-title">Upcoming Events</h2>
        <div className="events-grid">
          <div className="event-card">
            <h3 className="event-title">CodeNex Hackathon 2024</h3>
            <p className="event-description">Join us for a 48-hour coding challenge.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">Web Dev Workshop</h3>
            <p className="event-description">Master the art of web development.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">AI & ML Bootcamp</h3>
            <p className="event-description">Dive deep into AI and Machine Learning concepts.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">Cybersecurity Conference</h3>
            <p className="event-description">Learn the latest trends in cybersecurity from experts.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">Mobile App Dev Meetup</h3>
            <p className="event-description">Join us for a meetup on mobile app development techniques.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">Cloud Computing Workshop</h3>
            <p className="event-description">Explore cloud architecture and deployment strategies.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          
          <div className="event-card">
            <h3 className="event-title">CodeNex Hackathon 2024</h3>
            <p className="event-description">Join us for a 48-hour coding challenge.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
          <div className="event-card">
            <h3 className="event-title">Web Dev Workshop</h3>
            <p className="event-description">Master the art of web development.</p>
            <a href="#" className="btn-learn-more">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;



