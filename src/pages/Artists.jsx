import React from 'react';
import ArtistGrid from '../components/artists/ArtistGrid';
import '../styles/pages/_artists.scss';

const Artists = () => {
  return (
    <div className="artists-page">
      <ArtistGrid />
    </div>
  );
};

export default Artists;