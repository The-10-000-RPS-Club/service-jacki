import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Helpful = ({ question, incrementHelpfulCount }) => {
	const yes = question.answers[0].helpful.yes;
	const no = question.answers[0].helpful.no;
	const quesId = question.question_id;
	const ansId = question.answers[0]._id;

	return (
		<p>Helpful? <HelpfulButton className='yes' onClick={() => incrementHelpfulCount(quesId, ansId, yes)}>yes: {yes}</HelpfulButton> <HelpfulButton className='no' onClick={() => incrementHelpfulCount(quesId, ansId, no)}>no: {no}</HelpfulButton> <HelpfulButton>Report as inappropriate</HelpfulButton> </p>
	);
};

const HelpfulButton = styled.button`
	background-color: white;
	border: 1px solid grey;
	border-radius: 2px;
	&:hover {
    box-shadow: inset 0 0 3px #000000;
	}
	position: relative;
`;

export default Helpful;