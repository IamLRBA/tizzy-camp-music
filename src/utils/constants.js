// src/utils/constants.js
export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'About', path: '/about', icon: 'info' },
  { name: 'Artists', path: '/artists', icon: 'mic' },
  { name: 'Releases', path: '/releases', icon: 'music' },
  { name: 'Studio', path: '/studio', icon: 'studio' },
  { name: 'Contact', path: '/contact', icon: 'mail' },
];

export const SOCIAL_LINKS = [
  { name: 'Facebook', url: '#', icon: 'facebook' },
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Twitter', url: '#', icon: 'twitter' },
  { name: 'YouTube', url: '#', icon: 'youtube' },
  { name: 'Spotify', url: '#', icon: 'spotify' },
];

export const ARTISTS = [
  {
    id: 1,
    name: 'Artist One',
    genre: 'Hip-Hop/Rap',
    image: 'artist1.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    social: {
      instagram: '#',
      twitter: '#',
      facebook: '#',
    },
    music: {
      spotify: '#',
      apple: '#',
      youtube: '#',
      deezer: '#',
    },
    featuredTrack: {
      title: 'Featured Track',
      preview: 'track1.mp3',
    },
  },
  // Add 3 more artists
];

export const RELEASES = [
  {
    id: 1,
    title: 'Album One',
    artist: 'Artist One',
    type: 'Album',
    date: '2023-01-15',
    cover: 'album1.jpg',
    tracks: [
      { title: 'Track 1', duration: '3:45' },
      { title: 'Track 2', duration: '4:12' },
    ],
    links: {
      spotify: '#',
      apple: '#',
      youtube: '#',
      deezer: '#',
    },
  },
  // Add more releases
];

export const STUDIO_SERVICES = [
  {
    title: 'Recording',
    description: 'Professional recording sessions with our state-of-the-art equipment...',
    icon: 'recording',
  },
  // Add other services
];

export const BEATS = [
  {
    id: 1,
    title: 'Urban Dream',
    bpm: 92,
    key: 'C# Minor',
    genre: 'Trap',
    preview: 'beat1.mp3',
    price: {
      mp3: 29.99,
      wav: 49.99,
      trackout: 99.99,
      exclusive: 299.99,
    },
    image: 'beat1.jpg',
  },
  // Add more beats
];