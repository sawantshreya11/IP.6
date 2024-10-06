import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to ABC College!!</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
