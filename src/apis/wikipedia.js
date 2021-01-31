import axios from 'axios';

export const searchWikipedia = async (searchTerm) => {
	try {
		const { data } = await axios.post(
			`https://en.wikipedia.org/w/api.php?origin=*&action=query&list=search&format=json&srsearch=${searchTerm}`,
		);

		return data;
	} catch (err) {
		console.log(err);
		return '';
	}
};
