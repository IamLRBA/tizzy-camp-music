import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`animated-card ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;