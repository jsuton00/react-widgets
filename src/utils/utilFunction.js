export const cleanSnippet = (value) => {
	let inputSnippet = String(value);
	let newSnippet = '';

	const regex = /(<([^>]+)>)/gi;

	newSnippet = inputSnippet.replace(regex, '');

	return newSnippet;
};

export const editSlugs = (value) => {
	let inputSlug = String(value);
	let newSlug = '';

	newSlug = inputSlug.replace(' ', '_');

	return newSlug;
};
