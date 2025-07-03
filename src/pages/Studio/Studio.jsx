import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaMusic, FaImages, FaCalendarAlt } from 'react-icons/fa';
import './Studio.css';

const Studio = () => {
  return (
    <div className="studio-page">
      {/* Studio Hero Section */}
      <section className="studio-hero-section">
        <div className="studio-hero-overlay">
          <div className="container">
            <h1>G.O.E Records</h1>
            <p>God Over Everything - Our sacred space for musical creation</p>
          </div>
        </div>
      </section>

      {/* Studio Services Overview */}
      <section className="section studio-services-section">
        <div className="container">
          <h2 className="section-title">Studio Services</h2>
          <div className="studio-services-grid">
            <Link to="/studio/services" className="studio-service-card">
              <div className="service-icon">
                <FaMicrophone />
              </div>
              <h3>Recording</h3>
              <p>Professional recording sessions with our expert engineers</p>
            </Link>
            <Link to="/studio/beat-store" className="studio-service-card">
              <div className="service-icon">
                <FaMusic />
              </div>
              <h3>Beat Store</h3>
              <p>Purchase high-quality beats from our producers</p>
            </Link>
            <Link to="/studio/gallery" className="studio-service-card">
              <div className="service-icon">
                <FaImages />
              </div>
              <h3>Studio Gallery</h3>
              <p>Take a virtual tour of our facilities</p>
            </Link>
            <Link to="/studio/booking" className="studio-service-card">
              <div className="service-icon">
                <FaCalendarAlt />
              </div>
              <h3>Book Studio</h3>
              <p>Reserve your time in our professional recording space</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio CTA Section */}
      <section className="section studio-cta-section">
        <div className="container">
          <div className="studio-cta-content">
            <h2 className="section-title">Ready to Create?</h2>
            <p>Book your session at G.O.E Records today and bring your musical vision to life!</p>
            <Link to="/studio/booking" className="btn">Book Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;