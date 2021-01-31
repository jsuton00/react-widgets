import React from 'react';
import WidgetOptions from '../components/WidgetOptions';
import '../styles/pages/home-page.css';

const HomePage = () => {
	return (
		<div id="home-page" className="home-page contianer-fluid">
			<div id="home-page-main" className="home-page-main container-fluid">
				<div className="widget-navigation row">
					<WidgetOptions />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
