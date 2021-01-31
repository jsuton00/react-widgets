export const faqListData = [
	{
		question: 'How can I make an AJAX call?',
		answer:
			'You can use any AJAX library you like with React. Some popular ones are Axios, jQuery AJAX, and the browser built-in window.fetch.',
	},
	{
		question: 'Where in the component lifecycle should I make an AJAX call?',
		answer:
			'You should populate data with AJAX calls in the componentDidMount lifecycle method. This is so you can use setState to update your component when the data is retrieved.',
	},
	{
		question: 'What is the Virtual DOM?',
		answer:
			'The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM.',
	},
	{
		question: 'What is the difference between state and props?',
		answer:
			'Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component',
	},
];
