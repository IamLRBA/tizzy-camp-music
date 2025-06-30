import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './_studio.scss';

const StudioGallery = () => {
  const [activeImage, setActiveImage] = useState(null);
  const galleryImages = [
    'studio1.jpg',
    'studio2.jpg',
    'studio3.jpg',
    'studio4.jpg',
    'studio5.jpg',
    'studio6.jpg'
  ];

  return (
    <section id="gallery" className="studio-gallery-section">
      <div className="container">
        <SectionTitle 
          title="Studio Gallery" 
          subtitle="Take a look at our creative space" 
          center 
        />
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className={`gallery-item ${activeImage === index ? 'active' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveImage(index === activeImage ? null : index)}
              layout
            >
              <img 
                src={`/assets/images/studio/${image}`} 
                alt={`Studio view ${index + 1}`} 
              />
              {activeImage === index && (
                <motion.div
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Studio View {index + 1}</span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="video-tour">
          <h3>Virtual Studio Tour</h3>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/your-video-id"
              title="G.O.E Records Studio Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioGallery;