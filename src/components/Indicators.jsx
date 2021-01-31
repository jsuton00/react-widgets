import React from 'react';
import '../styles/components/indicators.css';

export const Loader = () => {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
