import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SAFECRYPTOSTOCKS</div>
      <ul className="nav-links">
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/market">Market</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/budget">Budget</a></li>
        <li><a href="/learn">Learn</a></li>
      </ul>
      <button className="btn-get-started">MY PROFILE</button>
    </nav>
  );
};

export default Navbar;