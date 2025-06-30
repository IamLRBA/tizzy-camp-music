// src/components/artists/ArtistProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { ARTISTS } from '../../utils/constants';
import { FaSpotify, FaApple, FaYoutube, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MusicPlayer from '../common/MusicPlayer';
import './_artists.scss';

const ArtistProfile = () => {
  const { id } = useParams();
  const artist = ARTISTS.find(a => a.id === parseInt(id));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <motion.div 
      className="artist-profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="artist-header">
        <div className="artist-image">
          <img src={`/assets/images/artists/${artist.image}`} alt={artist.name} />
        </div>
        <div className="artist-info">
          <h1>{artist.name}</h1>
          <p className="genre">{artist.genre}</p>
          <div className="social-links">
            <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={artist.social.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href={artist.social.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="artist-content">
        <div className="artist-bio">
          <h2>Biography</h2>
          <p>{artist.bio}</p>
        </div>

        <div className="artist-music">
          <h2>Featured Track</h2>
          <MusicPlayer 
            track={artist.featuredTrack} 
            artist={artist.name}
          />
          <div className="music-links">
            <h3>Stream on:</h3>
            <div className="platform-links">
              <a href={artist.music.spotify} target="_blank" rel="noopener noreferrer">
                <FaSpotify /> Spotify
              </a>
              <a href={artist.music.apple} target="_blank" rel="noopener noreferrer">
                <FaApple /> Apple Music
              </a>
              <a href={artist.music.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube /> YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="artist-gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {/* Gallery images would go here */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtistProfile;