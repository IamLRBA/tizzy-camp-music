import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight } from 'react-icons/fa';
import ArtistCard from '../../components/ArtistCard';
import TestimonialCard from '../../components/TestimonialCard';
import './Home.css';

const Home = () => {
  // Sample data - replace with your actual data
  const latestReleases = [
    {
      id: 1,
      title: 'New Single',
      artist: 'Artist 1',
      cover: '/images/artists/artist1/album1.jpg',
      date: '2023-06-15',
      link: '#'
    },
    {
      id: 2,
      title: 'Latest Album',
      artist: 'Artist 2',
      cover: '/images/artists/artist2/album1.jpg',
      date: '2023-05-20',
      link: '#'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Artist 1',
      image: '/images/artists/artist1/profile.jpg',
      genre: 'Hip Hop'
    },
    {
      id: 2,
      name: 'Artist 2',
      image: '/images/artists/artist2/profile.jpg',
      genre: 'R&B'
    },
    {
      id: 3,
      name: 'Artist 3',
      image: '/images/artists/artist3/profile.jpg',
      genre: 'Afrobeat'
    },
    {
      id: 4,
      name: 'Artist 4',
      image: '/images/artists/artist4/profile.jpg',
      genre: 'Pop'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Client 1',
      role: 'Musician',
      image: '/images/testimonials/client1.jpg',
      text: 'Working with Tizzy Camp was an amazing experience. Their professionalism and creativity are unmatched.'
    },
    {
      id: 2,
      name: 'Client 2',
      role: 'Producer',
      image: '/images/testimonials/client2.jpg',
      text: 'The best studio in town! The equipment and atmosphere are perfect for creating hits.'
    },
    {
      id: 3,
      name: 'Rebo Chapo',
      role: 'Artist',
      image: '/images/testimonials/client3.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    },
    {
      id: 3,
      name: 'Kim Swaqq',
      role: 'Artist',
      image: '/images/testimonials/client4.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    },
    {
      id: 3,
      name: 'Quex',
      role: 'Artist',
      image: '/images/testimonials/client5.jpg',
      text: 'Tizzy Camp helped me take my music to the next level. Highly recommend their services.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title slide-in-left">Welcome to <span>Tizzy Camp</span> Collective</h1>
          <p className="hero-subtitle slide-in-left delay-1">Where music meets passion and creativity knows no bounds</p>
          <div className="hero-buttons slide-in-left delay-2">
            <Link to="/artists" className="btn">Explore Artists</Link>
            <Link to="/studio" className="btn btn-outline">Studio Services</Link>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <img src="/images/hero-bg1.jpg" alt="Tizzy Camp Collective" />
        </div>
      </section>

      {/* Latest Releases */}
      <section className="section releases-section">
        <div className="container">
          <h2 className="section-title">Latest Releases</h2>
          <div className="releases-grid">
            {latestReleases.map((release) => (
              <div key={release.id} className="release-card slide-in-bottom">
                <div className="release-image">
                  <img src={release.cover} alt={release.title} />
                  <button className="play-button">
                    <FaPlay />
                  </button>
                </div>
                <div className="release-info">
                  <h3>{release.title}</h3>
                  <p>{release.artist}</p>
                  <span>{new Date(release.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer slide-in-bottom delay-2">
            <Link to="/releases" className="btn">
              View All Releases <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section className="section artists-section">
        <div className="container">
          <h2 className="section-title">Our Artists</h2>
          <div className="artists-grid">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
          <div className="section-footer slide-in-bottom delay-2">
            <Link to="/artists" className="btn">
              Meet All Artists <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Studio CTA Section */}
      <section className="section studio-cta-section">
        <div className="container">
          <div className="studio-cta-content">
            <h2 className="section-title">Ready to Create Something Amazing?</h2>
            <p>Book time at G.O.E Records, our state-of-the-art recording studio</p>
            <Link to="/studio/booking" className="btn">Book Studio Time</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;