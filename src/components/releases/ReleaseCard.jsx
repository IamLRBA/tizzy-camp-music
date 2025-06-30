import React from 'react';
import { motion } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube, FaDeezer } from 'react-icons/fa';
import { formatDate } from '../../utils/helpers';
import './_cards.scss';

const ReleaseCard = ({ release }) => {
  return (
    <motion.div 
      className="release-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
        <p className="artist">{release.artist}</p>
        <p className="date">{formatDate(release.date)} • {release.type}</p>
        
        <div className="tracklist">
          <h4>Tracklist</h4>
          <ul>
            {release.tracks.map((track, index) => (
              <li key={index}>
                <span className="track-number">{index + 1}.</span>
                <span className="track-title">{track.title}</span>
                <span className="track-duration">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="stream-links">
          <h4>Stream</h4>
          <div className="platforms">
            <a href={release.links.spotify} target="_blank" rel="noopener noreferrer">
              <FaSpotify />
            </a>
            <a href={release.links.apple} target="_blank" rel="noopener noreferrer">
              <FaApple />
            </a>
            <a href={release.links.youtube} target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href={release.links.deezer} target="_blank" rel="noopener noreferrer">
              <FaDeezer />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReleaseCard;