import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { faqListData } from '../assets/data/faqList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/components/faq.css';

const FAQ = () => {
	const [faqList, setFaqList] = useState('');
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (e, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (faqListData.length > 0) {
				setFaqList(faqListData);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<div id="faq-accordion" className="faq-accordion container">
			{faqList.length > 0 &&
				faqList.map((item, index) => {
					return (
						<Accordion
							key={index}
							expanded={expanded === `${`panel${index + 1}`}`}
							onChange={handleChange(`${`panel${index + 1}`}`)}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`${`panel${index + 1}bh-content`}`}
								className="accordion-header"
							>
								<h5 className="faq-accordion-question">{item.question}</h5>
							</AccordionSummary>
							<AccordionDetails className="accordion-details">
								<p className="faq-accordion-answer">{item.answer}</p>
							</AccordionDetails>
						</Accordion>
					);
				})}
		</div>
	);
};

export default FAQ;
