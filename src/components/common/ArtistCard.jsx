import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './_cards.scss';

const ArtistCard = ({ artist }) => {
  return (
    <motion.div 
      className="artist-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/artists/${artist.id}`}>
        <div className="artist-image">
          <img src={`/assets/images/artists/${artist.image}`} alt={artist.name} />
          <div className="overlay">
            <span>View Profile</span>
          </div>
        </div>
        <div className="artist-info">
          <h3>{artist.name}</h3>
          <p>{artist.genre}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ArtistCard;