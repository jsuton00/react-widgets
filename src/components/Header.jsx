import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div id="header" className="header container-fluid">
			<div className="header-row row">
				<h1 className="app-title">
					<Link to="/" className="home-link">
						<span className="app-icon">
							<FontAwesomeIcon icon={faReact} />
						</span>{' '}
						React Widgets
					</Link>
				</h1>
			</div>
		</div>
	);
};

export default Header;
