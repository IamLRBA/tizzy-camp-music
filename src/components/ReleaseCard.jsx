import React, { useState } from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './ReleaseCard.css';

const ReleaseCard = ({ release }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`release-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="release-header" onClick={toggleExpand}>
        <div className="release-image">
          <img src={release.cover} alt={release.title} />
          <button className="play-button">
            <FaPlay />
          </button>
        </div>
        <div className="release-basic-info">
          <h3>{release.title}</h3>
          <p>{release.artist}</p>
          <span>{release.type} • {new Date(release.date).toLocaleDateString()}</span>
        </div>
        <button className="expand-button">
          {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="release-details">
          <div className="tracklist">
            <h4>Tracklist</h4>
            <ul>
              {release.tracks.map((track) => (
                <li key={track.id}>
                  <span>{track.id}. {track.title}</span>
                  <span>{track.duration}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="release-links">
            <h4>Stream</h4>
            <div className="platform-links">
              <a href={release.links.spotify} target="_blank" rel="noopener noreferrer">
                <FaSpotify />
                <span>Spotify</span>
              </a>
              <a href={release.links.apple} target="_blank" rel="noopener noreferrer">
                <FaApple />
                <span>Apple Music</span>
              </a>
              <a href={release.links.youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReleaseCard;