import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { IoCheckmarkDone } from 'react-icons/io5';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setError('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="contact-page">
      {/* Success Modal */}
      {isSuccess && (
        <div className="success-modal">
          <div className="success-content">
            <IoCheckmarkDone className="success-icon" />
            <h3>Message Sent Successfully!</h3>
            <p>We'll get back to you soon. Thank you for reaching out.</p>
          </div>
        </div>
      )}

      {/* Map Section */}
      <section className="map-section">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7526223157565!2d32.4896411!3d0.2773552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbdb4eddd7a25%3A0x585236c6d89ce5f0!2s75a%20Better%20View%20Rd%2C%20Kampala!5e0!3m2!1sen!2sug!4v1625068800000!5m2!1sen!2sug" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Tizzy Camp Location"
        ></iframe>
      </section>

      {/* Contact Info Section */}
      <section className="section contact-info-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">We'd love to hear from you. Reach out through any of these channels.</p>
          
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>75a Better View Rd, Kampala, Uganda</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>+256 760 316 738</p>
            </div>
            
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>info@tizzycamp.com</p>
            </div>
            
            <div className="contact-info-card whatsapp-card">
              <a 
                href="https://wa.me/256760316738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                <div className="contact-info-icon whatsapp-icon">
                  <FaWhatsapp />
                </div>
                <h3>WhatsApp</h3>
                <p>+256 760 316 738</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-image">
              <img src="/images/contact-image.jpg" alt="Contact Us" />
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className="section-title">Send Us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll respond as soon as possible.</p>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              {error && <p className="error-message">{error}</p>}
              
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <ImSpinner8 className="spinner" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <FaPaperPlane />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;