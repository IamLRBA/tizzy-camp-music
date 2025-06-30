import React from 'react';
import '../styles/pages/_privacy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: June 30, 2023</p>
        
        <div className="privacy-content">
          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you use our website, including:</p>
            <ul>
              <li>Contact information (name, email, phone number)</li>
              <li>Payment information for studio bookings or beat purchases</li>
              <li>Communication preferences</li>
            </ul>
          </section>
          
          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Process transactions and send confirmations</li>
              <li>Respond to your inquiries and requests</li>
            </ul>
          </section>
          
          <section>
            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information.</p>
          </section>
          
          <section>
            <h2>4. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;