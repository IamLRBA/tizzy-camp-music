import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import TeamMemberCard from '../../components/TeamMemberCard';
import './About.css';

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  // Sample data - replace with your actual data
  const teamMembers = [
    {
      id: 1,
      name: 'CEO Name',
      role: 'Founder & CEO',
      image: '/images/team/ceo.jpg',
      bio: 'Visionary leader with over 10 years of experience in the music industry. Founded Tizzy Camp with the goal of creating a platform for talented artists to thrive.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Team Member 1',
      role: 'Head of A&R',
      image: '/images/team/member1.jpg',
      bio: 'Talent scout with an ear for hits. Responsible for discovering and developing new artists for the label.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Team Member 2',
      role: 'Marketing Director',
      image: '/images/team/member2.jpg',
      bio: 'Creative marketing strategist with a passion for music. Develops innovative campaigns to promote our artists and releases.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Team Member 3',
      role: 'Studio Manager',
      image: '/images/team/member3.jpg',
      bio: 'Audio engineer and studio expert. Ensures G.O.E Records operates at the highest technical standards.',
      social: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div className="about-page">
      {/* History Section */}
      <section className="section history-section">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="history-content">
            <div className="history-text slide-in-left">
              <h3>The Beginning</h3>
              <p>
                Tizzy Camp Music Label was founded in [YEAR] with a simple vision: to create a home for talented artists 
                where they could develop their craft and share their music with the world. What started as a small 
                collective of passionate musicians has grown into a full-fledged label and recording studio.
              </p>
              <h3>Our Mission</h3>
              <p>
                We believe in the power of music to inspire, heal, and bring people together. Our mission is to 
                nurture artistic talent, produce high-quality music, and create opportunities for our artists to 
                succeed in the ever-evolving music industry.
              </p>
              <h3>God Over Everything</h3>
              <p>
                The philosophy behind G.O.E Records reflects our core values. We put faith and integrity first in 
                everything we do, creating music that uplifts and resonates with listeners on a deeper level.
              </p>
            </div>
            <div className="history-image slide-in-right">
              <img src="/images/about-image.jpg" alt="Tizzy Camp History" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">Meet The Team</h2>
          
          {/* CEO Card */}
          <div className="ceo-card-container">
            {teamMembers.slice(0, 1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={true}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
          
          {/* Team Members */}
          <div className="team-members-slider">
            {teamMembers.slice(1).map((member) => (
              <TeamMemberCard 
                key={member.id}
                member={member}
                isExpanded={expandedCard === member.id}
                isCeo={false}
                toggleCard={() => toggleCard(member.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;