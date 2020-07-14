import React from 'react';

import logo from '../../assets/logo.png';

export const Header = () => {
	return (
		<header className="header">
			<img className="logo" src={logo} alt="logo " />
		</header>
	);
};
