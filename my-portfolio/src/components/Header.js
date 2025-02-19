import React from 'react';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <h1 className="logo"></h1>
      <nav>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
