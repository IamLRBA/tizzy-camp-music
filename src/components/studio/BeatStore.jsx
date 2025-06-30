import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { BEATS } from '../../utils/constants';
import MusicPlayer from '../common/MusicPlayer';
import './_studio.scss';

const BeatStore = () => {
  const [selectedLicense, setSelectedLicense] = useState('mp3');
  const [activeBeat, setActiveBeat] = useState(null);

  const handleLicenseChange = (license) => {
    setSelectedLicense(license);
  };

  const handleBeatSelect = (beat) => {
    setActiveBeat(beat.id === activeBeat ? null : beat.id);
  };

  return (
    <section id="beats" className="beat-store-section">
      <div className="container">
        <SectionTitle 
          title="Beat Store" 
          subtitle="Purchase high-quality beats for your next project" 
          center 
        />
        
        <div className="license-options">
          <h4>Select License Type:</h4>
          <div className="license-buttons">
            {['mp3', 'wav', 'trackout', 'exclusive'].map((license) => (
              <motion.button
                key={license}
                className={`license-button ${selectedLicense === license ? 'active' : ''}`}
                onClick={() => handleLicenseChange(license)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {license.charAt(0).toUpperCase() + license.slice(1)} Lease
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="beats-grid">
          {BEATS.map((beat) => (
            <motion.div
              key={beat.id}
              className={`beat-card ${activeBeat === beat.id ? 'active' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="beat-image" onClick={() => handleBeatSelect(beat)}>
                <img src={`/assets/images/beats/${beat.image}`} alt={beat.title} />
                <div className="overlay">
                  <button className="play-button">
                    {activeBeat === beat.id ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              
              <div className="beat-info">
                <h3>{beat.title}</h3>
                <p>{beat.genre} • {beat.bpm} BPM • {beat.key}</p>
                
                {activeBeat === beat.id && (
                  <motion.div
                    className="beat-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <MusicPlayer 
                      track={{ title: beat.title, preview: beat.preview }} 
                      artist="G.O.E Records" 
                    />
                    
                    <div className="purchase-section">
                      <h4>${beat.price[selectedLicense]}</h4>
                      <motion.button
                        className="purchase-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Purchase {selectedLicense.toUpperCase()} License
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeatStore;