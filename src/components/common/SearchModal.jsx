import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ARTISTS, RELEASES, STUDIO_SERVICES } from '../../utils/constants';
import { FaSearch, FaTimes, FaMusic, FaUser, FaMicrophone } from 'react-icons/fa';
import './_search.scss';

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = React.useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = [];

    // Search artists
    const artistMatches = ARTISTS.filter(artist =>
      artist.name.toLowerCase().includes(query.toLowerCase()) ||
      artist.genre.toLowerCase().includes(query.toLowerCase())
    );
    if (artistMatches.length > 0) {
      searchResults.push({
        type: 'Artists',
        items: artistMatches
      });
    }

    // Search releases
    const releaseMatches = RELEASES.filter(release =>
      release.title.toLowerCase().includes(query.toLowerCase()) ||
      release.artist.toLowerCase().includes(query.toLowerCase())
    );
    if (releaseMatches.length > 0) {
      searchResults.push({
        type: 'Releases',
        items: releaseMatches
      });
    }

    // Search studio services
    const serviceMatches = STUDIO_SERVICES.filter(service =>
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase())
    );
    if (serviceMatches.length > 0) {
      searchResults.push({
        type: 'Studio Services',
        items: serviceMatches
      });
    }

    setResults(searchResults);
  }, [query]);

  const getIconForType = (type) => {
    switch (type) {
      case 'Artists': return <FaUser />;
      case 'Releases': return <FaMusic />;
      case 'Studio Services': return <FaMicrophone />;
      default: return <FaSearch />;
    }
  };

  const getLinkForItem = (type, item) => {
    switch (type) {
      case 'Artists': return `/artists/${item.id}`;
      case 'Releases': return `/releases`;
      case 'Studio Services': return `/studio#services`;
      default: return '#';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="search-container">
            <div className="search-header">
              <div className="search-input">
                <FaSearch />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search artists, releases, services..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button onClick={onClose} className="close-button">
                <FaTimes />
              </button>
            </div>

            <div className="search-results">
              {results.length > 0 ? (
                results.map((category, index) => (
                  <div key={index} className="result-category">
                    <h4>{category.type}</h4>
                    <ul>
                      {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link to={getLinkForItem(category.type, item)} onClick={onClose}>
                            {getIconForType(category.type)}
                            <span>{item.name || item.title}</span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : query ? (
                <div className="no-results">
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                <div className="search-instructions">
                  <p>Search for artists, music releases, or studio services</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;