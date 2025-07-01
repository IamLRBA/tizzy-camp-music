import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaApple } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* CTA Section */}
          <div className="footer-cta">
            <h3>Ready to work with us?</h3>
            <Link to="/contact" className="btn">Get In Touch</Link>
          </div>
      {/* Wave Section */}
      <div className="wave-section">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--primary-color)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <h3>About Tizzy Camp</h3>
              <p>
                Tizzy Camp Music Label is a collective of talented artists and producers 
                dedicated to creating exceptional music and nurturing talent.
              </p>
              <div className="footer-social">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
            
            {/* Quick Links Column */}
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/artists">Artists</Link></li>
                <li><Link to="/releases">Releases</Link></li>
                <li><Link to="/studio">Studio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            {/* Studio Column */}
            <div className="footer-column">
              <h3>G.O.E Records</h3>
              <ul className="footer-links">
                <li><Link to="/studio/services">Services</Link></li>
                <li><Link to="/studio/beat-store">Beat Store</Link></li>
                <li><Link to="/studio/gallery">Gallery</Link></li>
                <li><Link to="/studio/booking">Booking</Link></li>
              </ul>
            </div>
            
            {/* Legal Column */}
            <div className="footer-column">
              <h3>Legal</h3>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
                <li><Link to="/blog">News & Blog</Link></li>
              </ul>
              
              <div className="footer-music-links">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaSpotify />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaApple />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Tizzy Camp Music Label & G.O.E Records. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;