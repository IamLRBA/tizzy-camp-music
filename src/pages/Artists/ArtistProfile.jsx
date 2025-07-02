import React from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaSpotify, FaApple, FaYoutube, FaDeezer } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import './ArtistProfile.css';

const ArtistProfile = () => {
  const { id } = useParams();

  // Sample data - replace with your actual data
  const artists = {
    1: {
      name: 'Artist 1',
      genre: 'Hip Hop',
      bio: 'Artist 1 is a groundbreaking hip hop artist known for their unique flow and thought-provoking lyrics. Emerging from the streets of Kampala, they bring a fresh perspective to the African hip hop scene.',
      image: '/images/artists/artist1/profile1.jpg',
      featuredSong: {
        title: 'Latest Hit Single',
        audio: '/audio/artist1-hit.mp3',
        cover: '/images/artists/artist1/album1.jpg'
      },
      social: {
        instagram: '#',
        twitter: '#',
        facebook: '#'
      },
      musicLinks: {
        spotify: '#',
        apple: '#',
        youtube: '#',
        deezer: '#',
        tidal: '#'
      }
    },
    2: {
      name: 'Artist 2',
      genre: 'R&B',
      bio: 'With a voice like silk, Artist 2 has been captivating audiences with their smooth R&B vocals and heartfelt lyrics. Their music blends contemporary R&B with traditional African influences.',
      image: '/images/artists/artist2/profile2.jpg',
      featuredSong: {
        title: 'Latest Hit Single',
        audio: '/audio/artist2-hit.mp3',
        cover: '/images/artists/artist2/album2.jpg'
      },
      social: {
        instagram: '#',
        twitter: '#',
        facebook: '#'
      },
      musicLinks: {
        spotify: '#',
        apple: '#',
        youtube: '#',
        deezer: '#',
        tidal: '#'
      }
    },
    3: {
      name: 'Artist 3',
      genre: 'Afrobeat',
      bio: 'Artist 3 brings the heat with infectious Afrobeat rhythms that get everyone moving. Their high-energy performances and catchy hooks have made them a festival favorite across East Africa.',
      image: '/images/artists/artist3/profile3.jpg',
      featuredSong: {
        title: 'Latest Hit Single',
        audio: '/audio/artist3-hit.mp3',
        cover: '/images/artists/artist3/album3.jpg'
      },
      social: {
        instagram: '#',
        twitter: '#',
        facebook: '#'
      },
      musicLinks: {
        spotify: '#',
        apple: '#',
        youtube: '#',
        deezer: '#',
        tidal: '#'
      }
    },
    4: {
      name: 'Artist 4',
      genre: 'Pop',
      bio: 'Artist 4 is the pop sensation taking the airwaves by storm. With chart-topping hits and a charismatic stage presence, they represent the new wave of African pop music.',
      image: '/images/artists/artist4/profile4.jpg',
      featuredSong: {
        title: 'Latest Hit Single',
        audio: '/audio/artist4-hit.mp3',
        cover: '/images/artists/artist4/album4.jpg'
      },
      social: {
        instagram: '#',
        twitter: '#',
        facebook: '#'
      },
      musicLinks: {
        spotify: '#',
        apple: '#',
        youtube: '#',
        deezer: '#',
        tidal: '#'
      }
    }
  };

  const artist = artists[id];

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-profile-page">
      {/* Hero Section */}
      <section className="artist-hero-section" style={{ backgroundImage: `url(${artist.image})` }}>
        <div className="artist-hero-overlay">
          <div className="container">
            <h1 className="artist-name">{artist.name}</h1>
            <p className="artist-genre">{artist.genre}</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section artist-bio-section">
        <div className="container">
          <div className="artist-bio-content">
            <div className="artist-image-container">
              <img src={artist.image} alt={artist.name} className="artist-image" />
            </div>
            <div className="artist-bio-text">
              <h2 className="section-title">Biography</h2>
              <p>{artist.bio}</p>
              <div className="artist-social-links">
                <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
                  <img src="/images/social/instagram.png" alt="Instagram" />
                </a>
                <a href={artist.social.twitter} target="_blank" rel="noopener noreferrer">
                  <img src="/images/social/twitter.png" alt="Twitter" />
                </a>
                <a href={artist.social.facebook} target="_blank" rel="noopener noreferrer">
                  <img src="/images/social/facebook.png" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Song */}
      <section className="section featured-song-section">
        <div className="container">
          <h2 className="section-title">Featured Song</h2>
          <div className="featured-song-container">
            <div className="featured-song-cover">
              <img src={artist.featuredSong.cover} alt={artist.featuredSong.title} />
              <button className="play-button">
                <FaPlay />
              </button>
            </div>
            <div className="featured-song-info">
              <h3>{artist.featuredSong.title}</h3>
              <p>{artist.name}</p>
              <audio controls className="audio-player">
                <source src={artist.featuredSong.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </section>

      {/* Music Platforms */}
      <section className="section music-platforms-section">
        <div className="container">
          <h2 className="section-title">Stream On</h2>
          <div className="music-platforms-grid">
            <a href={artist.musicLinks.spotify} target="_blank" rel="noopener noreferrer" className="music-platform-card">
              <FaSpotify />
              <span>Spotify</span>
            </a>
            <a href={artist.musicLinks.apple} target="_blank" rel="noopener noreferrer" className="music-platform-card">
              <FaApple />
              <span>Apple Music</span>
            </a>
            <a href={artist.musicLinks.youtube} target="_blank" rel="noopener noreferrer" className="music-platform-card">
              <FaYoutube />
              <span>YouTube</span>
            </a>
            <a href={artist.musicLinks.deezer} target="_blank" rel="noopener noreferrer" className="music-platform-card">
              <FaDeezer />
              <span>Deezer</span>
            </a>
            <a href={artist.musicLinks.tidal} target="_blank" rel="noopener noreferrer" className="music-platform-card">
              <SiTidal />
              <span>Tidal</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;