import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FaPlay, FaPause, FaSpotify, FaApple, FaYoutube, FaDeezer, FaInstagram, FaFacebook, FaTiktok, FaArrowDown, FaVolumeUp } from 'react-icons/fa';
import { SiTidal } from 'react-icons/si';
import './ArtistProfile.css';

const ArtistProfile = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlayingTrack, setCurrentPlayingTrack] = useState(null);
  const [volumes, setVolumes] = useState({});
  const audioRefs = useRef({});
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  // Sample data for all 6 artists
  const artists = {
    1: {
      name: 'Anzoa',
      genre: 'Afrobeat',
      bio: 'Born on February 28, 2002, Anzoa weaves the heartbeat of South Sudan into every note, blending Afro soul, Afro swing, and Afropop with the raw beauty of Arabi Juba and English. Her music tells stories of love, resilience, and identity, flowing with melodies that echo both the struggle and the spirit of her Madi people. Discovered and recommended to Fanan Ngala by a trusted colleague, Anzoa officially signed with Tizzy Camp Music on May 7, 2025. This pivotal moment marked the beginning of a journey poised to redefine the soundscape. Through every song, Anzoa lets rhythm speak where words fall short – soulful, bold, unforgettable. Dive into her world and experience the undeniable power of a voice destined to move souls.',
      profileImage: '/images/artists/artist1/profile1.jpg',
      coverImage: '/images/artists/artist1/cover1.jpg',
      gallery: [
        '/images/artists/artist1/gallery1.jpg',
        '/images/artists/artist1/gallery2.jpg',
        '/images/artists/artist1/gallery3.jpg',
        '/images/artists/artist1/gallery4.jpg'
      ],
      featuredSong: {
        title: 'City Lights',
        audio: '/audio/artist1-hit.mp3',
        cover: '/images/artists/artist1/album1.jpg'
      },
      songs: [
        { title: 'City Lights', audio: '/audio/artist1-track1.mp3', plays: '1.2M' },
        { title: 'Dream Chaser', audio: '/audio/artist1-track2.mp3', plays: '890K' },
        { title: 'Street Poetry', audio: '/audio/artist1-track3.mp3', plays: '1.5M' },
        { title: 'Rebel Soul', audio: '/audio/artist1-track4.mp3', plays: '2.1M' }
      ],
      social: {
        instagram: '#',
        facebook: '#',
        tiktok: '#'
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
      name: 'Pere Alo',
      genre: 'Afropop',
      bio: 'With a voice like silk, Artist 2 has been captivating audiences with their smooth R&B vocals and heartfelt lyrics. Their music blends contemporary R&B with traditional African influences.',
      profileImage: '/images/artists/artist2/profile2.jpg',
      coverImage: '/images/artists/artist2/cover2.jpg',
      gallery: [
        '/images/artists/artist2/gallery1.jpg',
        '/images/artists/artist2/gallery2.jpg',
        '/images/artists/artist2/gallery3.jpg',
        '/images/artists/artist2/gallery4.jpg'
      ],
      featuredSong: {
        title: 'Midnight Love',
        audio: '/audio/artist2-hit.mp3',
        cover: '/images/artists/artist2/album2.jpg'
      },
      songs: [
        { title: 'Midnight Love', audio: '/audio/artist2-track1.mp3', plays: '1.8M' },
        { title: 'Silk & Honey', audio: '/audio/artist2-track2.mp3', plays: '1.1M' },
        { title: 'Ocean Eyes', audio: '/audio/artist2-track3.mp3', plays: '2.3M' },
        { title: 'Neon Dreams', audio: '/audio/artist2-track4.mp3', plays: '1.6M' }
      ],
      social: {
        instagram: '#',
        facebook: '#',
        tiktok: '#'
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
      name: 'Ejay ShutdownBwoy',
      genre: 'Afrobeat',
      bio: 'Artist 3 brings the heat with infectious Afrobeat rhythms that get everyone moving. Their high-energy performances and catchy hooks have made them a festival favorite across East Africa.',
      profileImage: '/images/artists/artist3/profile3.jpg',
      coverImage: '/images/artists/artist3/cover3.jpg',
      gallery: [
        '/images/artists/artist3/gallery1.jpg',
        '/images/artists/artist3/gallery2.jpg',
        '/images/artists/artist3/gallery3.jpg',
        '/images/artists/artist3/gallery4.jpg'
      ],
      featuredSong: {
        title: 'Sunshine Rhythm',
        audio: '/audio/artist3-hit.mp3',
        cover: '/images/artists/artist3/album3.jpg'
      },
      songs: [
        { title: 'Sunshine Rhythm', audio: '/audio/artist3-track1.mp3', plays: '2.4M' },
        { title: 'Dance Floor', audio: '/audio/artist3-track2.mp3', plays: '1.9M' },
        { title: 'African Queen', audio: '/audio/artist3-track3.mp3', plays: '3.1M' },
        { title: 'Jungle Beat', audio: '/audio/artist3-track4.mp3', plays: '2.2M' }
      ],
      social: {
        instagram: '#',
        facebook: '#',
        tiktok: '#'
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

  // Handle play/pause for tracks
  const handleTrackPlay = (trackIndex) => {
    if (currentPlayingTrack === trackIndex) {
      audioRefs.current[trackIndex].pause();
      setCurrentPlayingTrack(null);
    } else {
      if (currentPlayingTrack !== null) {
        audioRefs.current[currentPlayingTrack].pause();
      }
      audioRefs.current[trackIndex].play();
      setCurrentPlayingTrack(trackIndex);
      // Initialize volume if not set
      if (volumes[trackIndex] === undefined) {
        setVolumes(prev => ({ ...prev, [trackIndex]: 0.7 }));
        audioRefs.current[trackIndex].volume = 0.7;
      }
    }
  };

  const handleVolumeChange = (trackIndex, e) => {
    const newVolume = parseFloat(e.target.value);
    setVolumes(prev => ({ ...prev, [trackIndex]: newVolume }));
    audioRefs.current[trackIndex].volume = newVolume;
  };

  // Format time for audio player
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Auto-rotate gallery images
  useEffect(() => {
    if (!artist?.gallery) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % artist.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [artist?.gallery?.length]);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  if (!artist) {
    return <div className="artist-not-found">Artist not found</div>;
  }

  // Scroll to platforms section
  const scrollToPlatforms = () => {
    const platformsSection = document.getElementById('platforms-section');
    platformsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="artist-profile-page">
      {/* Animated background elements */}
      <div className="music-note note-1">♪</div>
      <div className="music-note note-2">♫</div>
      <div className="music-note note-3">♩</div>
      <div className="music-note note-4">♬</div>
      <div className="music-bubble bubble-1"></div>
      <div className="music-bubble bubble-2"></div>
      <div className="music-bubble bubble-3"></div>

      {/* Hero Section */}
      <section className="artist-hero-section" style={{ backgroundImage: `url(${artist.coverImage})` }}>
        <div className="artist-hero-overlay">
          <div className="container">
            <h1 className="artist-name">{artist.name}</h1>
            <p className="artist-genre">{artist.genre}</p>
          </div>
        </div>
        <div className="section-bg-image bg-image-1"></div>
      </section>

      {/* Bio Section */}
      <section 
        id="bio-section" 
        ref={el => sectionRefs.current[0] = el}
        className={`section artist-bio-section ${visibleSections.includes('bio-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <div className="artist-bio-content">
            <div className="artist-image-container">
              <img src={artist.profileImage} alt={artist.name} className="artist-image" />
              <div className="artist-social-links">
                <a href={artist.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href={artist.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href={artist.social.tiktok} target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
              </div>
            </div>
            <div className="artist-bio-text">
              <h2 className="section-title">Biography</h2>
              <p>{artist.bio}</p>
            </div>
          </div>
        </div>
        <div className="section-bg-image bg-image-2"></div>
      </section>

      {/* Featured Song */}
      <section 
        id="featured-section" 
        ref={el => sectionRefs.current[1] = el}
        className={`section featured-song-section ${visibleSections.includes('featured-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Current Hit Song</h2>
          <div className="featured-song-container">
            <div className="featured-song-cover">
              <img src={artist.featuredSong.cover} alt={artist.featuredSong.title} />
              <button className="play-button" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </div>
            <div className="featured-song-info">
              <h3>{artist.featuredSong.title}</h3>
              <p>{artist.name}</p>
              <audio 
                controls 
                className="audio-player"
                ref={(el) => (audioRefs.current['featured'] = el)}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={artist.featuredSong.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
        <div className="section-bg-image bg-image-3"></div>
      </section>

      {/* Popular Songs */}
      <section 
        id="popular-section" 
        ref={el => sectionRefs.current[2] = el}
        className={`section popular-songs-section ${visibleSections.includes('popular-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Popular Tracks</h2>
          <div className="songs-list">
            {artist.songs.map((song, index) => (
              <div 
                key={index} 
                className={`song-item ${currentPlayingTrack === index ? 'playing' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="song-number">{index + 1}</span>
                <div className="song-info">
                  <h4>{song.title}</h4>
                  <p>{song.plays} plays</p>
                  {currentPlayingTrack === index && (
                    <div className="song-controls">
                      <div className="volume-control">
                        <FaVolumeUp className="volume-icon" />
                        <input 
                          type="range" 
                          min="0" 
                          max="1" 
                          step="0.01" 
                          value={volumes[index] || 0.7}
                          onChange={(e) => handleVolumeChange(index, e)}
                          className="volume-slider"
                        />
                      </div>
                      <div className="time-display">
                        {audioRefs.current[index] && !isNaN(audioRefs.current[index].duration) ? 
                          `${formatTime(audioRefs.current[index].currentTime)} / ${formatTime(audioRefs.current[index].duration)}` : 
                          '0:00 / 0:00'
                        }
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  className="play-song-btn"
                  onClick={() => handleTrackPlay(index)}
                >
                  {currentPlayingTrack === index ? <FaPause /> : <FaPlay />}
                </button>
                <audio 
                  src={song.audio} 
                  ref={(el) => (audioRefs.current[index] = el)}
                  onEnded={() => currentPlayingTrack === index && setCurrentPlayingTrack(null)}
                  onTimeUpdate={() => {
                    // Force re-render to update time display
                    if (currentPlayingTrack === index) {
                      const audio = audioRefs.current[index];
                      if (audio) {
                        const event = new Event('timeupdate');
                        audio.dispatchEvent(event);
                      }
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <button className="stream-note" onClick={scrollToPlatforms}>
            Click here to discover more music from {artist.name}
            <FaArrowDown className="arrow-down" />
          </button>
        </div>
        <div className="section-bg-image bg-image-4"></div>
      </section>

      {/* Music Platforms */}
      <section 
        id="platforms-section" 
        ref={el => sectionRefs.current[3] = el}
        className={`section music-platforms-section ${visibleSections.includes('platforms-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Streaming Platforms</h2>
          <div className="music-platforms-grid">
            {Object.entries(artist.musicLinks).map(([platform, link], index) => {
              const Icon = 
                platform === 'spotify' ? FaSpotify :
                platform === 'apple' ? FaApple :
                platform === 'youtube' ? FaYoutube :
                platform === 'deezer' ? FaDeezer :
                platform === 'tidal' ? SiTidal : null;
              
              return (
                <a 
                  key={platform} 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="music-platform-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {Icon && <Icon />}
                  <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                </a>
              );
            })}
          </div>
        </div>
        <div className="section-bg-image bg-image-5"></div>
      </section>

      {/* Gallery Section */}
      <section 
        id="gallery-section" 
        ref={el => sectionRefs.current[4] = el}
        className={`section gallery-section ${visibleSections.includes('gallery-section') ? 'visible' : ''}`}
      >
        <div className="container">
          <h2 className="section-title">Artist Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-main">
              {artist.gallery.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`${artist.name} gallery ${index + 1}`} 
                  className={`gallery-image ${index === currentImageIndex ? 'active' : ''}`}
                  style={{ animationName: index % 2 === 0 ? 'fadeInZoom' : 'slideIn' }}
                  onLoad={(e) => {
                    const aspectRatio = e.target.naturalWidth / e.target.naturalHeight;
                    e.target.parentNode.style.aspectRatio = aspectRatio;
                  }}
                />
              ))}
            </div>
            <div className="gallery-thumbnails">
              {artist.gallery.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-container ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtistProfile;