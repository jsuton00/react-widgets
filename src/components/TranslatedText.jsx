import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { doTranslate } from '../apis/translate';

const TranslatedText = (props) => {
	const { language, text } = props;

	const [translated, setTranslated] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			const cancelToken = axios.CancelToken.source();
			doTranslate(text, language, cancelToken)
				.then(setTranslated)
				.then(() => {
					try {
						return cancelToken.cancel();
					} catch (error) {
						return;
					}
				});
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [language, text]);
	return (
		<div id="translated-output" className="translated-output row">
			<div className="card-body">
				<h5 className="translated-output-heading card-title">
					Translated Text
				</h5>
				<textarea
					id="translated-display"
					name="translated-display"
					type="text"
					placeholder="Translate"
					className="translated-display"
					value={translated}
					rows="5"
					disabled
				></textarea>
			</div>
		</div>
	);
};

export default TranslatedText;
