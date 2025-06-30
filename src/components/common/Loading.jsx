import React from 'react';
import { motion } from 'framer-motion';
import './_animations.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="spinner-inner"></div>
      </motion.div>
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;