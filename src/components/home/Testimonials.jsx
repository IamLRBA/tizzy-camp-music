import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { TESTIMONIALS } from '../../utils/constants';
import './_home.scss';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionTitle 
          title="What People Say" 
          subtitle="Testimonials from our artists and clients" 
          center 
        />
        
        <div className="testimonials-container">
          <div className="testimonials-slider">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                active={index === activeIndex}
              />
            ))}
          </div>
          
          <div className="testimonials-dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;