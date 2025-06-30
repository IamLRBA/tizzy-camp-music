// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaSpotify } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './_footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      
      <div className="footer-content">
        <div className="footer-section">
          <h3>Tizzy Camp Music Label</h3>
          <p>Nurturing talent, creating timeless music.</p>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaSpotify /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/artists">Artists</Link></li>
            <li><Link to="/releases">Releases</Link></li>
            <li><Link to="/studio">Studio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>G.O.E Records</h3>
          <p>Our in-house recording studio.</p>
          <ul>
            <li><Link to="/studio#services">Services</Link></li>
            <li><Link to="/studio#beats">Beat Store</Link></li>
            <li><Link to="/studio#gallery">Gallery</Link></li>
            <li><Link to="/studio#booking">Booking</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/blog">News & Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tizzy Camp Music Label. All Rights Reserved.</p>
      </div>

      <div className="footer-cta">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Studio Time
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;