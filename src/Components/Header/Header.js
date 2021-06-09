import React from 'react';
import './Header.css';

const Header = ({ title, color, subtitle }) => {
  return (
    <div className='Header'>
      <h1 style={{ color: `${color}` }}>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Header;
