import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { RELEASES } from '../../utils/constants';
import './_home.scss';

const LatestReleases = () => {
  const latestReleases = RELEASES.slice(0, 4); // Get latest 4 releases

  return (
    <section className="latest-releases">
      <div className="container">
        <SectionTitle 
          title="Latest Releases" 
          subtitle="Discover our newest music" 
          center 
        />
        
        <div className="releases-grid">
          {latestReleases.map((release, index) => (
            <motion.div
              key={release.id}
              className="release-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="release-image">
                <img src={`/assets/images/releases/${release.cover}`} alt={release.title} />
                <div className="overlay">
                  <button className="play-button">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="release-info">
                <h3>{release.title}</h3>
                <p>{release.artist}</p>
                <span>{new Date(release.date).toLocaleDateString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="view-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/releases" className="view-all-button">
            View All Releases
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestReleases;