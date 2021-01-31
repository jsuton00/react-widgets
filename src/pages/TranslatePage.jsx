import React, { useState } from 'react';
import LanguageSelect from '../components/LanguageSelect';
import TranslateInput from '../components/TranslatedInput';
import TranslatedText from '../components/TranslatedText';
import '../styles/pages/translate-page.css';

const TranslatePage = () => {
	const [language, setLanguage] = useState('');
	const [text, setText] = useState('');

	return (
		<div id="translate-page" className="translate-page container-fluid">
			<div id="translate-page-main" className="translate-page-main row">
				<div className="translate-page-section translate-controls container-fluid">
					<TranslateInput inputValue={text} changeValue={setText} />
					<LanguageSelect language={language} selectLanguage={setLanguage} />
					<TranslatedText text={text} language={language} />
				</div>
			</div>
		</div>
	);
};

export default TranslatePage;
