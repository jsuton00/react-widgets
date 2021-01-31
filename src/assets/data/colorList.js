export const colourList = [
	{ label: 'Pick a Colour', value: '' },
	{ label: 'red', value: 'red' },
	{ label: 'green', value: 'green' },
	{ label: 'yellow', value: 'yellow' },
	{ label: 'blue', value: 'blue' },
	{ label: 'magenta', value: 'magenta' },
	{ label: 'cyan', value: 'cyan' },
	{ label: 'orange', value: 'orange' },
	{ label: 'purple', value: 'purple' },
	{ label: 'pink', value: 'pink' },
	{ label: 'brown', value: 'brown' },
	{ label: 'black', value: 'black' },
	{ label: 'gray', value: 'gray' },
	{ label: 'maroon', value: 'maroon' },
];

export const colourListValues = () => {
	let colourValues;

	if (colourList.length > 0) {
		colourValues = colourList.map((item) => {
			return item.value;
		});

		return colourValues;
	}
};
