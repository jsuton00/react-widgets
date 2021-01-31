import React, { useEffect, useState } from 'react';
import { colourList, colourListValues } from '../assets/data/colorList';
import ColourPicker from '../components/ColourPicker';
import '../styles/pages/dropdown-page.css';

const DropDownPage = () => {
	const [colours, setColours] = useState('');
	const [selectValues, setSelectValues] = useState('');
	const [selectedColour, setSelectedColour] = useState(selectValues[0]);

	const selectColour = (value) => {
		let selectedValue = value;

		if (selectedValue === '') {
			setSelectedColour(selectedValue);
		}

		return setSelectedColour(selectedValue);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setColours(colourList);
			setSelectValues(colourListValues());
		});
		return () => {
			clearTimeout(timer);
		};
	}, []);

	console.log('Selected colour: ', selectedColour);

	return (
		<div id="dropdown-page" className="dropdown-page container-fluid">
			<div className="dropdown-page-main row">
				<div className="dropdown-page-section select-section">
					<div className="select-section-row row">
						<ColourPicker
							colourOptions={colours}
							optionValues={selectValues}
							selectColour={selectColour}
						/>
					</div>
				</div>
				<div className="dropdown-page-section select-results-section">
					<div
						className={`select-results ${
							selectedColour && `select-results-display-${selectedColour}`
						}`}
					>
						{selectedColour && (
							<p className="select-results-text row">{selectedColour}</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDownPage;
