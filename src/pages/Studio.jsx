// src/pages/Studio.jsx
import React from 'react';
import ServicesSection from '../components/studio/ServicesSection';
import BeatStore from '../components/studio/BeatStore';
import StudioGallery from '../components/studio/StudioGallery';
import BookingForm from '../components/studio/BookingForm';
import '../styles/pages/_studio.scss';

const Studio = () => {
  return (
    <div className="studio-page">
      <div className="studio-hero">
        <h1>G.O.E Records</h1>
        <p>God Over Everything - Your Creative Sanctuary</p>
      </div>
      
      <ServicesSection />
      <BeatStore />
      <StudioGallery />
      <BookingForm />
    </div>
  );
};

export default Studio;