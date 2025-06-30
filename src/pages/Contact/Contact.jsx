import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
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
          <div className="contact-info-grid">
            <div className="contact-info-card slide-in-left">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>75a Better View Rd, Kampala, Uganda</p>
            </div>
            <div className="contact-info-card slide-in-bottom">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>+256 XXX XXX XXX</p>
            </div>
            <div className="contact-info-card slide-in-bottom delay-1">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>info@tizzycamp.com</p>
            </div>
            <div className="contact-info-card slide-in-right">
              <div className="contact-info-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>+256 XXX XXX XXX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section contact-form-section">
        <div className="container">
          <div className="contact-form-container">
            <div className="contact-form-image slide-in-left">
              <img src="/images/contact-image.jpg" alt="Contact Us" />
            </div>
            <form onSubmit={handleSubmit} className="contact-form slide-in-right">
              <h2 className="section-title">Send Us a Message</h2>
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
              <button type="submit" className="btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;