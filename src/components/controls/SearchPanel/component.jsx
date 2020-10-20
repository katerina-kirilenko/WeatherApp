import React from 'react';

import './style.css';

const SearchPanel = () => {
  return (
    <form id="search-form" className="search-block">
      <input
        className="search-input"
        type="search"
        name="search-city"
        placeholder="Minsk"
      />
      <button className="button search-btn" id="search" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
