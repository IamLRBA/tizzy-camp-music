import React, { useState } from 'react';
import { FaPlay, FaImages, FaVideo } from 'react-icons/fa';
import './StudioGallery.css';

const StudioGallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  // Sample data - replace with your actual media
  const photos = [
    { id: 1, src: '/images/studio/gallery1.jpg', alt: 'Studio Control Room' },
    { id: 2, src: '/images/studio/gallery2.jpg', alt: 'Live Room' },
    { id: 3, src: '/images/studio/gallery3.jpg', alt: 'Vocal Booth' },
    { id: 4, src: '/images/studio/gallery4.jpg', alt: 'Equipment Rack' },
    { id: 5, src: '/images/studio/gallery5.jpg', alt: 'Mixing Console' },
    { id: 6, src: '/images/studio/gallery6.jpg', alt: 'Lounge Area' }
  ];

  const videos = [
    { id: 1, title: 'Studio Tour', src: '/videos/studio-tour.mp4', thumbnail: '/images/studio/video1.jpg' },
    { id: 2, title: 'Recording Session', src: '/videos/session.mp4', thumbnail: '/images/studio/video2.jpg' },
    { id: 3, title: 'Behind the Scenes', src: '/videos/behind-scenes.mp4', thumbnail: '/images/studio/video3.jpg' }
  ];

  return (
    <div className="studio-gallery-page">
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Studio Gallery</h2>
          <p className="section-subtitle">
            Take a look inside G.O.E Records, our state-of-the-art recording facility
          </p>
          
          {/* Gallery Tabs */}
          <div className="gallery-tabs">
            <button 
              className={`gallery-tab ${activeTab === 'photos' ? 'active' : ''}`}
              onClick={() => setActiveTab('photos')}
            >
              <FaImages /> Photos
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'videos' ? 'active' : ''}`}
              onClick={() => setActiveTab('videos')}
            >
              <FaVideo /> Videos
            </button>
          </div>
          
          {/* Photos Gallery */}
          {activeTab === 'photos' && (
            <div className="photos-grid">
              {photos.map(photo => (
                <div key={photo.id} className="photo-card">
                  <img src={photo.src} alt={photo.alt} />
                  <div className="photo-overlay">
                    <p>{photo.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Videos Gallery */}
          {activeTab === 'videos' && (
            <div className="videos-grid">
              {videos.map(video => (
                <div key={video.id} className="video-card">
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <button className="play-button">
                      <FaPlay />
                    </button>
                  </div>
                  <h3>{video.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudioGallery;