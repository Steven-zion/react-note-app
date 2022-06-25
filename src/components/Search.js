import React from 'react';

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <i className="uil uil-search" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="search note..."
      />
    </div>
  );
};

export default Search;
