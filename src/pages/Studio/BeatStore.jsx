import React, { useState } from 'react';
import BeatCard from '../../components/BeatCard';
import './BeatStore.css';

const BeatStore = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [cart, setCart] = useState([]);

  // Sample data - replace with your actual beats
  const beats = [
    {
      id: 1,
      title: 'Tropical Vibes',
      genre: 'Afrobeat',
      bpm: 112,
      price: 29.99,
      preview: '/audio/beat1.mp3',
      image: '/images/beats/beat1.jpg',
      tags: ['afrobeat', 'dance', 'summer']
    },
    {
      id: 2,
      title: 'City Lights',
      genre: 'Hip Hop',
      bpm: 95,
      price: 39.99,
      preview: '/audio/beat2.mp3',
      image: '/images/beats/beat2.jpg',
      tags: ['hiphop', 'trap', 'urban']
    },
    {
      id: 3,
      title: 'Soulful Groove',
      genre: 'R&B',
      bpm: 88,
      price: 34.99,
      preview: '/audio/beat3.mp3',
      image: '/images/beats/beat3.jpg',
      tags: ['rnb', 'soul', 'chill']
    },
    {
      id: 4,
      title: 'Electric Dreams',
      genre: 'Pop',
      bpm: 120,
      price: 44.99,
      preview: '/audio/beat4.mp3',
      image: '/images/beats/beat4.jpg',
      tags: ['pop', 'edm', 'dance']
    },
    {
      id: 5,
      title: 'Dark Alley',
      genre: 'Trap',
      bpm: 140,
      price: 49.99,
      preview: '/audio/beat5.mp3',
      image: '/images/beats/beat5.jpg',
      tags: ['trap', 'dark', 'hard']
    },
    {
      id: 6,
      title: 'Island Breeze',
      genre: 'Dancehall',
      bpm: 105,
      price: 29.99,
      preview: '/audio/beat6.mp3',
      image: '/images/beats/beat6.jpg',
      tags: ['dancehall', 'reggae', 'summer']
    }
  ];

  const genres = ['all', ...new Set(beats.map(beat => beat.genre.toLowerCase()))];

  const filteredBeats = activeFilter === 'all' 
    ? beats 
    : beats.filter(beat => beat.genre.toLowerCase() === activeFilter);

  const addToCart = (beat) => {
    setCart([...cart, beat]);
  };

  const removeFromCart = (beatId) => {
    setCart(cart.filter(item => item.id !== beatId));
  };

  return (
    <div className="beat-store-page">
      <section className="section beat-store-section">
        <div className="container">
          <h2 className="section-title">Beat Store</h2>
          <p className="section-subtitle">
            Purchase high-quality beats from our producers
          </p>
          
          {/* Genre Filters */}
          <div className="genre-filters">
            {genres.map(genre => (
              <button
                key={genre}
                className={`genre-filter ${activeFilter === genre ? 'active' : ''}`}
                onClick={() => setActiveFilter(genre)}
              >
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Beats Grid */}
          <div className="beats-grid">
            {filteredBeats.map(beat => (
              <BeatCard 
                key={beat.id} 
                beat={beat} 
                onAddToCart={() => addToCart(beat)}
                onRemoveFromCart={() => removeFromCart(beat.id)}
                isInCart={cart.some(item => item.id === beat.id)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${cart.length > 0 ? 'active' : ''}`}>
        <div className="cart-header">
          <h3>Your Cart ({cart.length})</h3>
        </div>
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <p>{item.genre} • ${item.price}</p>
              </div>
              <button 
                className="remove-from-cart"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
          </div>
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeatStore;