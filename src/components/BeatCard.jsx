import React, { useState } from 'react';
import { FaPlay, FaPause, FaShoppingCart, FaCheck } from 'react-icons/fa';
import './BeatCard.css';

const BeatCard = ({ beat, onAddToCart, onRemoveFromCart, isInCart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(beat.preview));

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  audio.onended = () => {
    setIsPlaying(false);
  };

  const handleCartAction = () => {
    if (isInCart) {
      onRemoveFromCart();
    } else {
      onAddToCart();
    }
  };

  return (
    <div className="beat-card">
      <div className="beat-image">
        <img src={beat.image} alt={beat.title} />
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <div className="beat-info">
        <h3>{beat.title}</h3>
        <div className="beat-meta">
          <span>{beat.genre}</span>
          <span>{beat.bpm} BPM</span>
        </div>
        <div className="beat-price">${beat.price.toFixed(2)}</div>
        <button 
          className={`cart-button ${isInCart ? 'in-cart' : ''}`}
          onClick={handleCartAction}
        >
          {isInCart ? <FaCheck /> : <FaShoppingCart />}
          {isInCart ? 'Added' : 'Add to Cart'}
        </button>
      </div>
      <div className="license-options">
        <h4>License Options:</h4>
        <ul>
          <li>MP3 Lease - ${beat.price.toFixed(2)}</li>
          <li>WAV Lease - ${(beat.price * 1.5).toFixed(2)}</li>
          <li>Trackout Lease - ${(beat.price * 2).toFixed(2)}</li>
          <li>Exclusive Rights - ${(beat.price * 5).toFixed(2)}</li>
        </ul>
      </div>
    </div>
  );
};

export default BeatCard;