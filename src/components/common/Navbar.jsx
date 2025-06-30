// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import './_navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/assets/images/logo.png" alt="Tizzy Camp Logo" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-menu" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Main Navigation */}
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <motion.li 
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={link.path} 
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <span className="navbar-link-icon">{/* Icon would go here */}</span>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Search */}
        <div className="navbar-search">
          {searchOpen ? (
            <motion.div 
              className="search-input-container"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaTimes onClick={toggleSearch} />
            </motion.div>
          ) : (
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch onClick={toggleSearch} />
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;