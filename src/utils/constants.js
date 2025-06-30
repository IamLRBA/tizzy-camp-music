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

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    image: 'ceo.jpg',
    bio: 'Founder and visionary behind Tizzy Camp Music Label. With over 15 years in the music industry...',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'A&R Director',
    image: 'ar-director.jpg',
    bio: 'Talent scout and artist development specialist with an ear for unique sounds...',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Studio Manager',
    image: 'studio-manager.jpg',
    bio: 'Audio engineer and studio operations expert ensuring top-quality recordings...',
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Marketing Director',
    image: 'marketing-director.jpg',
    bio: 'Digital marketing specialist building artist brands and growing fanbases...',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    }
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alex Turner',
    role: 'Signed Artist',
    text: 'Tizzy Camp has provided me with the platform and support to take my music to the next level. The team truly cares about their artists.',
    image: 'testimonial1.jpg'
  },
  {
    id: 2,
    name: 'Maria Garcia',
    role: 'Studio Client',
    text: 'The G.O.E Records studio is my go-to for recording. Professional environment with top-notch equipment and engineers.',
    image: 'testimonial2.jpg'
  },
  {
    id: 3,
    name: 'David Kim',
    role: 'Producer',
    text: 'Working with Tizzy Camp has been a game-changer. Their beat store is my first stop when looking for quality instrumentals.',
    image: 'testimonial3.jpg'
  },
  {
    id: 4,
    name: 'Lisa Chen',
    role: 'Industry Partner',
    text: 'The most professional and artist-focused label I\'ve worked with. Their attention to detail is unmatched.',
    image: 'testimonial4.jpg'
  }
];