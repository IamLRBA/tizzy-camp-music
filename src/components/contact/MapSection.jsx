import React from 'react';
import { motion } from 'framer-motion';
import './_contact.scss';

const MapSection = () => {
  return (
    <motion.div
      className="map-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3>Our Location</h3>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808521234599!2d36.82121431475398!3d-1.2923358359799927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5b3c3%3A0x1e3b9b9b9b9b9b9b!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Tizzy Camp Location"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default MapSection;