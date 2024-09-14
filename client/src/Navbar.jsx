// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Create CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/data-entry">Data Entry</Link>
        </li>
        <li>
          <Link to="/national-ranking">National Ranking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
