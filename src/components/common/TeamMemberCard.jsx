import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './_cards.scss';

const TeamMemberCard = ({ member, isCEO = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`team-member-card ${isCEO ? 'ceo' : ''} ${isExpanded ? 'expanded' : ''}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={!isExpanded ? { scale: 1.03 } : {}}
      onClick={() => !isCEO && setIsExpanded(!isExpanded)}
    >
      <div className="member-image">
        <img src={`/assets/images/team/${member.image}`} alt={member.name} />
      </div>
      
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        
        {(isExpanded || isCEO) && (
          <motion.div
            className="member-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <p className="bio">{member.bio}</p>
            <div className="social-links">
              {member.social.linkedin && (
                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
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
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;