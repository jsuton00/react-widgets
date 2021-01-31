import React from 'react';
import { cleanSnippet, editSlugs } from '../utils/utilFunction';
import '../styles/components/searchResults.css';

const SearchResults = (props) => {
	const { results } = props;

	return (
		<div
			id="search-results-list"
			className="search-results-list list-group container-fluid"
		>
			{results.query.search.length > 0 &&
				results.query.search.map((item, index) => {
					return (
						<div
							key={index}
							className="search-results-list-item list-group-item"
						>
							<h5 className="search-results-title row">
								<a
									href={`https://en.wikipedia.org/wiki/${editSlugs(
										item.title,
									)}`}
									target="_blank"
									rel="noopener noreferrer"
									className="search-results-link row"
								>
									{item.title}
								</a>
							</h5>
							<p className="search-results-snippet row">
								{cleanSnippet(item.snippet)}...
							</p>
						</div>
					);
				})}
		</div>
	);
};

export default SearchResults;
