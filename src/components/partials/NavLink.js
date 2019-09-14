import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import layoutStyles from './NavLink.module.scss';

export const NavLink = props => {
	const Links = [
		{ path: '/', title: 'Home' },
		{ path: '/Services', title: 'Services' },
		{ path: '/OurWork', title: 'Our Work' },
		{ path: '/About', title: 'About' },
		{ path: '/Location', title: 'Contact' },
	];

	const LinksMap = Links.map(({ path, title }) => (
		<Link
			to={path}
			style={{ textDecoration: 'none' }}
			key={Math.random() + Math.random() * 10000}
		>
			<li className={layoutStyles.mb__anchor}>{title}</li>
		</Link>
	));

	return <Fragment>{LinksMap}</Fragment>;
};