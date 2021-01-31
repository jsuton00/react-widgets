import React from 'react';

const TranslateInput = (props) => {
	const { inputValue, changeValue } = props;
	return (
		<div id="translate-input" className="translate-input row">
			<div className="card-body">
				<h5 className="translate-input-heading card-title">Translate Input</h5>
				<textarea
					id="language-input"
					name="language-input"
					type="text"
					placeholder="English..."
					rows="5"
					className="language-input card-text"
					onChange={(e) => {
						return changeValue(e.target.value);
					}}
					value={inputValue}
					autoFocus
				></textarea>
			</div>
		</div>
	);
};

export default TranslateInput;
