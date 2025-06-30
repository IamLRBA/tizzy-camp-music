import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './_contact.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-form-section">
      <motion.div
        className="contact-info"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3>Get In Touch</h3>
        <p>
          Have questions about our label, artists, or studio services? 
          Fill out the form or contact us directly using the information below.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:info@tizzycamp.com">info@tizzycamp.com</a>
          </div>
          
          <div className="contact-item">
            <h4>Phone</h4>
            <a href="tel:+1234567890">(123) 456-7890</a>
          </div>
          
          <div className="contact-item">
            <h4>Studio Bookings</h4>
            <a href="mailto:bookings@goerecords.com">bookings@goerecords.com</a>
          </div>
          
          <div className="contact-item">
            <h4>Address</h4>
            <p>123 Music Avenue, Creative District</p>
            <p>Nairobi, Kenya</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="form-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isSubmitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Message Sent!</h3>
            <p>Thank you for contacting us. We'll get back to you soon.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ContactForm;