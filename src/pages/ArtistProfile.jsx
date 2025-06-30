import React from 'react';
import { useParams } from 'react-router-dom';
import { ARTISTS } from '../utils/constants';
import ArtistProfile from '../components/artists/ArtistProfile';
import '../styles/pages/_artists.scss';

const ArtistProfilePage = () => {
  const { id } = useParams();
  const artist = ARTISTS.find(a => a.id === parseInt(id));

  if (!artist) {
    return <div className="not-found">Artist not found</div>;
  }

  return (
    <div className="artist-profile-page">
      <ArtistProfile artist={artist} />
    </div>
  );
};

export default ArtistProfilePage;