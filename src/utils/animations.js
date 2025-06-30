import { motion } from 'framer-motion';

// Page transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
};

export const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

// Staggered animation for children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const childVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Card hover animation
export const cardHover = {
  scale: 1.03,
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
  transition: {
    duration: 0.3
  }
};

// Button tap animation
export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1
  }
};

// Fade in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5 }
};

// Slide up animation
export const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

// Rotate animation
export const rotate = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: 'linear'
  }
};

// Pulse animation
export const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 1,
    repeat: Infinity
  }
};

// Bounce animation
export const bounce = {
  y: [0, -10, 0],
  transition: {
    duration: 1,
    repeat: Infinity
  }
};