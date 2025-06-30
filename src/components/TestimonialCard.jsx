import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card" style={{ scrollSnapAlign: 'start' }}>
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <h4>{testimonial.name}</h4>
        <p className="testimonial-role">{testimonial.role}</p>
        <p className="testimonial-text">"{testimonial.text}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;