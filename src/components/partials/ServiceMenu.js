import React from 'react';
import { Link } from 'gatsby';

import '../../style/main.css';

//fix hash route
export const ServiceMenu = props => {
	return (
		<div className={`service__menu ${props.toggled ? 'fadeInMenu' : ''}`}>
			<ul className="service__menu--service-list">
				<Link to={'/services#venetian-plaster'} style={{ textDecoration: 'none', width: '100%' }}>
					<li>Venetian Plaster</li>
				</Link>

				<Link to={'/services#plaster-mouldings'} style={{ textDecoration: 'none', width: '100%' }}>
					<li> Plaster Mouldings</li>
				</Link>

				<Link to={'/services#stucco'} style={{ textDecoration: 'none', width: '100%' }}>
					<li>Stucco</li>
				</Link>

				<Link to={'/services#drywall'} style={{ textDecoration: 'none', width: '100%' }}>
					<li>Drywall</li>
				</Link>

				<Link to={'/services#concrete'} style={{ textDecoration: 'none', width: '100%' }}>
					<li>Concrete</li>
				</Link>
			</ul>
		</div>
	);
};