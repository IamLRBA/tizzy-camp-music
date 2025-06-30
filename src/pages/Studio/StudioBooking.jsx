import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import './StudioBooking.css';

const StudioBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
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
    // Handle form submission (e.g., send to backend)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="studio-booking-page">
      <section className="section booking-section">
        <div className="container">
          <div className="booking-container">
            <div className="booking-info slide-in-left">
              <h2 className="section-title">Book Studio Time</h2>
              <p>
                Fill out the form to request studio time at G.O.E Records. 
                Our team will get back to you within 24 hours to confirm your booking.
              </p>
              <div className="booking-details">
                <h3>Studio Rates</h3>
                <ul>
                  <li>Recording Session: $50/hour</li>
                  <li>Mixing/Mastering: $40/hour</li>
                  <li>Full Day (8 hours): $300</li>
                  <li>Beat Production: $60/hour</li>
                </ul>
                <h3>Contact Info</h3>
                <p>
                  For urgent bookings or special requests, call us at:<br />
                  <strong>+256 XXX XXX XXX</strong>
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="booking-form slide-in-right">
              {isSubmitted && (
                <div className="success-message">
                  Thank you! Your booking request has been submitted. We'll contact you shortly.
                </div>
              )}
              
              <div className="form-group">
                <div className="input-icon">
                  <FaUser />
                </div>
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
                <div className="input-icon">
                  <FaEnvelope />
                </div>
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
                <div className="input-icon">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <div className="input-icon">
                    <FaCalendarAlt />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <div className="input-icon">
                    <FaClock />
                  </div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="recording">Recording Session</option>
                  <option value="mixing">Mixing/Mastering</option>
                  <option value="production">Beat Production</option>
                  <option value="full-day">Full Day Booking</option>
                  <option value="other">Other (Specify in Message)</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Additional Information (Artist Name, Project Details, Special Requests)"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn">
                Submit Booking Request <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioBooking;