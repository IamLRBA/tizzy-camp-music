import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import SocialIcons from '../common/SocialIcons';
import './_home.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            <span>Tizzy Camp</span> Music Label
          </h1>
          <p className="subtitle">Where talent meets opportunity</p>
          <p className="description">
            A creative hub for artists and music lovers. Home to exceptional talent and 
            professional recording at G.O.E Records.
          </p>
          
          <div className="hero-buttons">
            <motion.button
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Artists
            </motion.button>
            <motion.button
              className="secondary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Studio
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/assets/images/hero-image.jpg" alt="Tizzy Camp Collective" />
        </motion.div>
      </div>
      
      <div className="hero-social">
        <SocialIcons type="horizontal" color="light" />
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;