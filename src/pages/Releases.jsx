import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import ReleaseCard from '../components/releases/ReleaseCard';
import { RELEASES } from '../utils/constants';
import '../styles/pages/_releases.scss';

const Releases = () => {
  return (
    <div className="releases-page">
      <div className="container">
        <SectionTitle 
          title="Discography" 
          subtitle="All releases from Tizzy Camp artists" 
          center 
        />
        
        <div className="releases-grid">
          {RELEASES.map((release, index) => (
            <ReleaseCard key={release.id} release={release} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Releases;