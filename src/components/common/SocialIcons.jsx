import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../../utils/constants';
import { 
  FaFacebook, FaInstagram, FaTwitter, 
  FaYoutube, FaSpotify, FaApple, FaSoundcloud, FaDeezer 
} from 'react-icons/fa';
import './_social.scss';

const iconComponents = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  twitter: FaTwitter,
  youtube: FaYoutube,
  spotify: FaSpotify,
  apple: FaApple,
  soundcloud: FaSoundcloud,
  deezer: FaDeezer
};

const SocialIcons = ({ type = 'default', color = 'primary', size = 'normal' }) => {
  return (
    <div className={`social-icons ${type} ${color} ${size}`}>
      {SOCIAL_LINKS.map((social, index) => {
        const IconComponent = iconComponents[social.icon] || FaFacebook;
        return (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label={social.name}
          >
            <IconComponent />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;