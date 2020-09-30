import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

function LoadMore({ setNumQuestions, numQuestions}) {

	const [display, setDisplay] = useState(numQuestions);

	useEffect(() => {
    setNumQuestions(display);
  }, [display]);

	return (
		<LoadMoreButton onClick={() => setDisplay(display + 2)}>
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
width: 20%;
`;

export default LoadMore;
