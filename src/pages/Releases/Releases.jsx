import React from 'react';
import { FaPlay, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa';
import ReleaseCard from '../../components/ReleaseCard';
import './Releases.css';

const Releases = () => {
  // Sample data - replace with your actual data
  const releases = [
    {
      id: 1,
      title: 'Album 1',
      artist: 'Artist 1',
      type: 'Album',
      date: '2023-06-15',
      cover: '/images/artists/artist1/album1.jpg',
      tracks: [
        { id: 1, title: 'Track 1', duration: '3:45' },
        { id: 2, title: 'Track 2', duration: '4:12' },
        { id: 3, title: 'Track 3', duration: '3:30' },
        { id: 4, title: 'Track 4', duration: '5:20' },
        { id: 5, title: 'Track 5', duration: '4:05' }
      ],
      links: {
        spotify: '#',
        apple: '#',
        youtube: '#'
      }
    },
    {
      id: 2,
      title: 'Single 1',
      artist: 'Artist 2',
      type: 'Single',
      date: '2023-05-20',
      cover: '/images/artists/artist2/album1.jpg',
      tracks: [
        { id: 1, title: 'Single Track', duration: '3:50' }
      ],
      links: {
        spotify: '#',
        apple: '#',
        youtube: '#'
      }
    },
    {
      id: 3,
      title: 'Album 2',
      artist: 'Artist 3',
      type: 'Album',
      date: '2023-04-10',
      cover: '/images/artists/artist3/album1.jpg',
      tracks: [
        { id: 1, title: 'Intro', duration: '2:30' },
        { id: 2, title: 'Song 1', duration: '3:45' },
        { id: 3, title: 'Song 2', duration: '4:20' },
        { id: 4, title: 'Song 3', duration: '3:15' },
        { id: 5, title: 'Outro', duration: '2:50' }
      ],
      links: {
        spotify: '#',
        apple: '#',
        youtube: '#'
      }
    },
    {
      id: 4,
      title: 'Single 2',
      artist: 'Artist 4',
      type: 'Single',
      date: '2023-03-05',
      cover: '/images/artists/artist4/album1.jpg',
      tracks: [
        { id: 1, title: 'Hit Single', duration: '3:25' }
      ],
      links: {
        spotify: '#',
        apple: '#',
        youtube: '#'
      }
    }
  ];

  return (
    <div className="releases-page">
      <section className="section releases-list-section">
        <div className="container">
          <h2 className="section-title">Discography</h2>
          <p className="section-subtitle">
            Explore all the music released under Tizzy Camp Music Label
          </p>
          <div className="releases-grid">
            {releases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Releases;