import React from 'react';
import HistorySection from '../components/about/HistorySection';
import PhilosophySection from '../components/about/PhilosophySection';
import TeamSection from '../components/about/TeamSection';
import '../styles/pages/_about.scss';

const About = () => {
  return (
    <div className="about-page">
      <HistorySection />
      <PhilosophySection />
      <TeamSection />
    </div>
  );
};

export default About;