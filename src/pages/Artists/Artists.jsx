import React from 'react';
import { Link } from 'react-router-dom';
import ArtistCard from '../../components/ArtistCard';
import './Artists.css';

const Artists = () => {
  // Sample data - replace with your actual data
  const artists = [
    {
      id: 1,
      name: 'Artist 1',
      image: '/images/artists/artist1/profile1.jpg',
      genre: 'Hip Hop'
    },
    {
      id: 2,
      name: 'Artist 2',
      image: '/images/artists/artist2/profile2.jpg',
      genre: 'R&B'
    },
    {
      id: 3,
      name: 'Artist 3',
      image: '/images/artists/artist3/profile3.jpg',
      genre: 'Afrobeat'
    },
    {
      id: 4,
      name: 'Artist 4',
      image: '/images/artists/artist4/profile4.jpg',
      genre: 'Pop'
    }
  ];

  return (
    <div className="artists-page">
      <section className="section artists-list-section">
        <div className="container">
          <h2 className="section-title">Our Artists</h2>
          <p className="section-subtitle">
            Discover the talented artists that make up the Tizzy Camp Collective
          </p>
          <div className="artists-grid">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artists;