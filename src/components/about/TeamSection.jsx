import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import TeamMemberCard from '../common/TeamMemberCard';
import { TEAM_MEMBERS } from '../../utils/constants';
import './_about.scss';

const TeamSection = () => {
  const ceo = TEAM_MEMBERS.find(member => member.role === 'CEO');
  const otherMembers = TEAM_MEMBERS.filter(member => member.role !== 'CEO');

  return (
    <section className="team-section">
      <div className="container">
        <SectionTitle 
          title="Meet The Team" 
          subtitle="The people behind Tizzy Camp" 
          center 
        />
        
        {ceo && (
          <motion.div
            className="ceo-card-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TeamMemberCard member={ceo} isCEO />
          </motion.div>
        )}
        
        <motion.div
          className="team-members-container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="team-members-slider">
            {otherMembers.map((member, index) => (
              <TeamMemberCard 
                key={member.id} 
                member={member} 
                style={{ transitionDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;