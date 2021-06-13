import React from 'react';
import './Header.css';
import img from './logo_coderhouse.png';

const Header = (props) => {
	return (
		<div className='Header'>
			<h1 style={{ color: `${props.color}` }}>{props.title}</h1>
			<h2>{props.subtitle}</h2>
			<img src={img} alt='logo-coder-house' width='400px' />
		</div>
	);
};

export default Header;
