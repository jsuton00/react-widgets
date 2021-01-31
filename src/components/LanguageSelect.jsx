import React, { useEffect, useRef, useState } from 'react';
import { langList } from '../assets/data/langList';

const LanguageSelect = (props) => {
	const { language, selectLanguage } = props;
	const [languageList, setLanguageList] = useState('');

	const langRef = useRef();

	useEffect(() => {
		const timer = setTimeout(() => {
			setLanguageList(langList);
		});

		return () => {
			clearTimeout(timer);
		};
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (language === langRef.current.value) {
				selectLanguage(language);
			}
		});
		return () => {
			clearTimeout(timer);
		};
	}, [language, selectLanguage]);

	return (
		<div id="language-select-section" className="language-select-section row">
			<select
				ref={langRef}
				id="language-select"
				className="language-select form-control"
				onChange={(e) => {
					selectLanguage(e.target.value);
				}}
				value={language}
			>
				{languageList.length > 0 &&
					languageList.map((language, index) => {
						return (
							<option key={index} value={language.value}>
								{language.label}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export default LanguageSelect;
