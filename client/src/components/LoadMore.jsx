import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function LoadMore({ setNumQuestions, numQuestions, getQuestions}) {

	const [display, setDisplay] = useState(numQuestions);

	useEffect(() => {
    setNumQuestions(display);
  }, [display]);

	return (
		<LoadMoreButton onClick={() => {
			getQuestions();
			setDisplay(display + 5)}}>
		 Load More
		</LoadMoreButton>
	)
}

const LoadMoreButton = styled.button`
background-color: light-grey;
color: black;
border: 1px solid;
padding-top: 5px;
padding-bottom: 5px;
display: flex;
justify-content: center;
margin: auto;
margin-bottom: 150px;
width: 20%;
&:hover {
	cursor: pointer;
}
`;

export default LoadMore;
