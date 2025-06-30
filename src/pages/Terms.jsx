import React from 'react';
import '../styles/pages/_terms.scss';

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="container">
        <h1>Terms & Conditions</h1>
        <p className="last-updated">Last Updated: June 30, 2023</p>
        
        <div className="terms-content">
          <section>
            <h2>1. General Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms.</p>
          </section>
          
          <section>
            <h2>2. Studio Bookings</h2>
            <p>All studio bookings require a deposit. Cancellations must be made 48 hours in advance.</p>
          </section>
          
          <section>
            <h2>3. Beat Licensing</h2>
            <p>All beat purchases are subject to our licensing agreement. Exclusive rights transfers require written confirmation.</p>
          </section>
          
          <section>
            <h2>4. Intellectual Property</h2>
            <p>All content on this website is the property of Tizzy Camp Music Label unless otherwise stated.</p>
          </section>
          
          <section>
            <h2>5. Limitation of Liability</h2>
            <p>We are not liable for any indirect damages resulting from your use of this website.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;