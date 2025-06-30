import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ArtistCard from '../common/ArtistCard';
import { ARTISTS } from '../../utils/constants';
import './_home.scss';

const FeaturedArtists = () => {
  const featuredArtists = ARTISTS.slice(0, 4); // Get first 4 artists

  return (
    <section className="featured-artists">
      <div className="container">
        <SectionTitle 
          title="Featured Artists" 
          subtitle="Meet our talented roster" 
          center 
        />
        
        <div className="artists-grid">
          {featuredArtists.map((artist, index) => (
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
        
        <motion.div
          className="view-all"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="/artists" className="view-all-button">
            View All Artists
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedArtists;