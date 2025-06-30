import React from 'react';
import { motion } from 'framer-motion';
import './_cards.scss';

const TestimonialCard = ({ testimonial, active }) => {
  return (
    <motion.div
      className={`testimonial-card ${active ? 'active' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: active ? 1 : 0.7, scale: active ? 1 : 0.9 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: active ? 1.03 : 0.93 }}
    >
      <div className="testimonial-content">
        <p>"{testimonial.text}"</p>
      </div>
      <div className="testimonial-author">
        <div className="author-image">
          <img src={`/assets/images/testimonials/${testimonial.image}`} alt={testimonial.name} />
        </div>
        <div className="author-info">
          <h4>{testimonial.name}</h4>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;