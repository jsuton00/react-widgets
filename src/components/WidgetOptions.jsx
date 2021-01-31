import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { widgetOptions } from '../constants/constLists';
import '../styles/components/widgetOptions.css';

const WidgetOptions = () => {
	const [options, setOptions] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setOptions(widgetOptions);
		});

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div id="widget-options-container" className="widget-options-container row">
			{options.length > 0 &&
				options.map((w, i) => {
					return (
						<div key={i} className="widget-option">
							<Link to={`/widgets/${w.label}`} className="widget-option-link">
								<div className="widget-option-text">
									<span className="widget-option-icon row">
										<FontAwesomeIcon icon={w.icon} size="3x" />{' '}
									</span>
									<p className="widget-option-label row">{w.label}</p>
								</div>
							</Link>{' '}
						</div>
					);
				})}
		</div>
	);
};

export default WidgetOptions;
