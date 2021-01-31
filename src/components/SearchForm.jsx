import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import '../styles/components/searchForm.css';

const SearchForm = (props) => {
	const { inputSearch, inputValue, clickSearch } = props;

	const handleChange = (e) => {
		return inputSearch(e.target.value);
	};

	const handleSearch = async (e) => {
		e.preventDefault();

		if (inputSearch) {
			return await clickSearch(inputSearch);
		}

		return '';
	};

	return (
		<div id="wikisearchForm" className="wiki-search-form row">
			<div className="wiki-search-form-container search-textfield-container">
				<input
					id="search-textfield"
					name="search-textfield"
					type="text"
					placeholder="Search..."
					className="search-textfield"
					onChange={handleChange}
					value={inputValue}
					required
				/>
			</div>
			<div className="wiki-search-form-container search-button-container">
				<Button
					className="search-button"
					variant="contained"
					startIcon={<SearchIcon />}
					onClick={handleSearch}
				>
					Search
				</Button>
			</div>
		</div>
	);
};

export default SearchForm;
