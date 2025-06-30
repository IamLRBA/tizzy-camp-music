import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './_about.scss';

const PhilosophySection = () => {
  const principles = [
    {
      title: "Artist First",
      description: "We prioritize the growth and well-being of our artists above all else.",
      icon: "artist"
    },
    {
      title: "Quality Over Quantity",
      description: "Every release meets our high standards of musical excellence.",
      icon: "quality"
    },
    {
      title: "Creative Freedom",
      description: "Artists retain full creative control over their music and image.",
      icon: "freedom"
    },
    {
      title: "Community Building",
      description: "We foster a supportive environment where artists can collaborate and grow together.",
      icon: "community"
    }
  ];

  return (
    <section className="philosophy-section">
      <div className="container">
        <SectionTitle 
          title="Our Philosophy" 
          subtitle="The values that guide us" 
          center 
        />
        
        <div className="principles-grid">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="principle-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="principle-icon">
                {/* Icon would be rendered here based on principle.icon */}
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mission-statement"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3>Our Mission</h3>
          <p>
            To discover, develop, and promote exceptional musical talent while providing 
            the resources, guidance, and creative environment needed for artists to 
            reach their full potential. We believe in creating music that resonates 
            deeply with listeners and stands the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;