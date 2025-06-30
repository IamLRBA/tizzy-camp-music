import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './_about.scss';

const HistorySection = () => {
  return (
    <section className="history-section">
      <div className="container">
        <SectionTitle title="Our Story" />
        
        <div className="history-content">
          <motion.div
            className="history-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>From Humble Beginnings</h3>
            <p>
              Tizzy Camp Music Label was founded in 2015 with a simple mission: to create a 
              platform for talented artists to thrive in the music industry. What started as 
              a small collective of like-minded musicians has grown into a full-fledged 
              label with a roster of exceptional talent.
            </p>
            <p>
              Our journey hasn't been without challenges, but our passion for music and 
              commitment to our artists has remained unwavering. Every success story from 
              our label fuels our motivation to keep pushing boundaries.
            </p>
          </motion.div>
          
          <motion.div
            className="history-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/assets/images/about/history.jpg" alt="Tizzy Camp History" />
          </motion.div>
        </div>
        
        <div className="milestones">
          <motion.div
            className="milestone"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4>2015</h4>
            <p>Founded as an independent collective</p>
          </motion.div>
          
          <motion.div
            className="milestone"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>2017</h4>
            <p>First major artist signed</p>
          </motion.div>
          
          <motion.div
            className="milestone"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>2019</h4>
            <p>Launched G.O.E Records studio</p>
          </motion.div>
          
          <motion.div
            className="milestone"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4>2023</h4>
            <p>Over 50 releases and counting</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;