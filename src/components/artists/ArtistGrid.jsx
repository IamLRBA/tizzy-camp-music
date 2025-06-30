import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ArtistCard from '../common/ArtistCard';
import { ARTISTS } from '../../utils/constants';
import './_artists.scss';

const ArtistGrid = () => {
  return (
    <section className="artist-grid-section">
      <div className="container">
        <SectionTitle 
          title="Our Artists" 
          subtitle="Discover the talent of Tizzy Camp" 
          center 
        />
        
        <div className="artists-grid">
          {ARTISTS.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArtistCard artist={artist} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGrid;