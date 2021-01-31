import React, { useRef } from 'react';
import '../styles/components/colourPicker.css';

const ColourPicker = (props) => {
	const { colourOptions, optionValues, selectColour } = props;

	const colourSelectRef = useRef();

	const handleChange = (e) => {
		if (e.target.value === colourSelectRef.current.value) {
			return selectColour(e.target.value);
		}
	};

	return (
		<div className="colour-picker-container container-fluid row">
			<select
				ref={colourSelectRef}
				className="colour-picker-select"
				onChange={handleChange}
				defaultValue={optionValues[0]}
				value={optionValues}
			>
				{colourOptions.length > 0 &&
					colourOptions.map((colour, index) => {
						return (
							<option
								key={index}
								className="colour-picker-option"
								value={colour.value}
							>
								{colour.label}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export default ColourPicker;
