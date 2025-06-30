import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUsers, FaMusic, FaMicrophone, FaEnvelope, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
    setSearchOpen(false);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home', icon: <FaHome /> },
    { path: '/about', name: 'About', icon: <FaUsers /> },
    { path: '/artists', name: 'Artists', icon: <FaUsers /> },
    { path: '/releases', name: 'Releases', icon: <FaMusic /> },
    { path: '/studio', name: 'Studio', icon: <FaMicrophone /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Tizzy Camp Logo" />
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="navbar-icon">{link.icon}</span>
              <span className="navbar-text">{link.name}</span>
              <span className="navbar-underline"></span>
            </Link>
          ))}
        </div>

        <div className="navbar-search-container">
          {searchOpen && (
            <form onSubmit={handleSearchSubmit} className="navbar-search-form">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="navbar-search-input"
              />
              <button type="submit" className="navbar-search-submit">
                <FaSearch />
              </button>
            </form>
          )}
          <button onClick={toggleSearch} className="navbar-search-toggle">
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </button>
        </div>

        <button onClick={toggleMenu} className="navbar-toggle">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;