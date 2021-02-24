import React from 'react';
import './NavTab.css';

const NavTab = ({ className }) => (
  <a href="#about-project" className={className}>
    <button className="nav-tab">О проекте</button>
  </a>
);

export default NavTab;
