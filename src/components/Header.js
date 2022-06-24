import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>
        <i className="uil uil-edit"></i>
        Notes-flix
      </h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
