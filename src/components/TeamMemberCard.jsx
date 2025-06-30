import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './TeamMemberCard.css';

const TeamMemberCard = ({ member, isExpanded, isCeo, toggleCard }) => {
  return (
    <div 
      className={`team-member-card ${isCeo ? 'ceo' : ''} ${isExpanded ? 'expanded' : ''}`}
      onClick={!isCeo ? toggleCard : undefined}
      style={{ scrollSnapAlign: isCeo ? 'none' : 'start' }}
    >
      <div className="team-member-image">
        <img src={member.image} alt={member.name} />
      </div>
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p className="team-member-role">{member.role}</p>
        
        {isExpanded && (
          <div className="team-member-details">
            <p className="team-member-bio">{member.bio}</p>
            <div className="team-member-social">
              {member.social.facebook && (
                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              )}
              {member.social.twitter && (
                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
              {member.social.instagram && (
                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberCard;