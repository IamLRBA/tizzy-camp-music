import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import '../styles/pages/_contact.scss';

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default Contact;