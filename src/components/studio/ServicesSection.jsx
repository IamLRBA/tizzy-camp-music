import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { STUDIO_SERVICES } from '../../utils/constants';
import './_studio.scss';

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <SectionTitle 
          title="Studio Services" 
          subtitle="Professional audio production services" 
          center 
        />
        
        <div className="services-grid">
          {STUDIO_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {/* Icon would be rendered here based on service.icon */}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="equipment-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>Our Equipment</h3>
          <p>
            G.O.E Records is equipped with state-of-the-art gear to ensure the highest 
            quality recordings. From premium microphones to industry-standard monitors, 
            we have everything needed to bring your vision to life.
          </p>
          <div className="equipment-list">
            <ul>
              <li>Neumann U87 Ai Microphone</li>
              <li>Universal Audio Apollo X8 Interface</li>
              <li>Yamaha HS8 Monitors</li>
              <li>Pro Tools | HD Software</li>
            </ul>
            <ul>
              <li>SSL 2+ Interface</li>
              <li>AKG C414 Microphones</li>
              <li>Focal Trio6 Be Monitors</li>
              <li>Various Outboard Gear</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;