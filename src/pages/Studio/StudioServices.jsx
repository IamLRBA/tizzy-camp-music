import React from 'react';
import { FaMicrophoneAlt, FaSlidersH, FaHeadphones, FaBroadcastTower, FaMusic } from 'react-icons/fa';
import './StudioServices.css';

const StudioServices = () => {
  const services = [
    {
      id: 1,
      title: 'Recording',
      icon: <FaMicrophoneAlt />,
      description: 'High-quality recording sessions in our acoustically treated live room. We offer vocal booths and instrument isolation for pristine recordings.',
      equipment: ['Neumann U87 Microphones', 'Universal Audio Apollo Interfaces', 'Pro Tools HD']
    },
    {
      id: 2,
      title: 'Mixing',
      icon: <FaSlidersH />,
      description: 'Professional mixing services to balance and enhance your recordings. Our engineers bring out the best in your music.',
      equipment: ['SSL Console', 'Waves Plugins', 'UAD Plugins']
    },
    {
      id: 3,
      title: 'Mastering',
      icon: <FaHeadphones />,
      description: 'Final polish for your tracks to ensure they sound great on all playback systems. Ready for streaming and distribution.',
      equipment: ['Izotope Ozone', 'Barefoot Monitors', 'Analog Mastering Chain']
    },
    {
      id: 4,
      title: 'Production',
      icon: <FaMusic />,
      description: 'Full music production from concept to final product. Work with our in-house producers to create your sound.',
      equipment: ['Ableton Live', 'MPC X', 'VST Instrument Collection']
    },
    {
      id: 5,
      title: 'Voiceovers',
      icon: <FaBroadcastTower />,
      description: 'Professional voiceover recording for commercials, audiobooks, and other media projects.',
      equipment: ['Soundproof Booth', 'Sennheiser MKH 416', 'Adobe Audition']
    }
  ];

  return (
    <div className="studio-services-page">
      <section className="section services-list-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Professional audio services to meet all your music production needs
          </p>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="equipment-list">
                  <h4>Equipment:</h4>
                  <ul>
                    {service.equipment.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudioServices;