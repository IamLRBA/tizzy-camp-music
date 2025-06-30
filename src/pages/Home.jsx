// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LatestReleases from '../components/home/LatestReleases';
import FeaturedArtists from '../components/home/FeaturedArtists';
import Testimonials from '../components/home/Testimonials';
import '../styles/pages/_home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <LatestReleases />
      <FeaturedArtists />
      <Testimonials />
    </div>
  );
};

export default Home;