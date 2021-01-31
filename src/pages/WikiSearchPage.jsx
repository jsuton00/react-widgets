import React, { useEffect, useState } from 'react';
import { searchWikipedia } from '../apis/wikipedia';
import { Loader } from '../components/Indicators';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';
import '../styles/pages/wikisearch-page.css';

const WikiSearchPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState('');
	const [debouncedSearch, setDebouncedSearch] = useState('');
	const [isLoading, setLoading] = useState(false);

	const setInputValue = (value) => {
		return setSearchTerm(value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (searchTerm) {
				setDebouncedSearch(searchTerm);
			}
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [searchTerm]);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (debouncedSearch.length > 0) {
				setLoading(true);
				searchWikipedia(debouncedSearch).then((data) => {
					if (data) {
						setResults(data);
						setLoading(false);
					}
				});
			} else {
				setLoading(false);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [debouncedSearch]);

	return (
		<div id="wiki-search-page" className="wiki-search-page container-fluid">
			<div id="wiki-search-page-main" className="wiki-search-page-main row">
				<div className="wiki-search-page-section search-form-section">
					<SearchForm
						inputSearch={setInputValue}
						inputValue={searchTerm}
						clickSearch={searchWikipedia}
					/>
				</div>
				<div className="wiki-search-page-section search-results-section">
					{isLoading ? (
						<Loader />
					) : (
						results && results.query && <SearchResults results={results} />
					)}
				</div>
			</div>
		</div>
	);
};

export default WikiSearchPage;
