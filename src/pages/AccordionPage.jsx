import React from 'react';
import FAQ from '../components/FAQ';
import '../styles/pages/accordion-page.css';

const AccordionPage = () => {
	return (
		<div id="accordion-page" className="accordion-page container-fluid">
			<div
				id="accordion-page-main"
				className="accordion-page-main container-fluid"
			>
				<div className="accordion-page-content row">
					<FAQ />
				</div>
			</div>
		</div>
	);
};

export default AccordionPage;
