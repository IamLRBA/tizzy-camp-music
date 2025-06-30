import React, { useState, useEffect } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { debounce } from '../utils/helpers';
import './Search.css';

const Search = ({ onSearch, placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');
  const [isActive, setIsActive] = useState(false);

  const debouncedSearch = debounce((searchTerm) => {
    onSearch(searchTerm);
  }, 300);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    if (!query) {
      setIsActive(false);
    }
  };

  return (
    <div className={`search-container ${isActive ? 'active' : ''}`}>
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className="search-input"
      />
      {query && (
        <button className="clear-button" onClick={clearSearch}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Search;