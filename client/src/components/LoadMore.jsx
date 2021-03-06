/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable brace-style */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function LoadMore({
  setNumQuestions, numQuestions, getMoreQuestions, sort,
}) {
  const [display, setDisplay] = useState(numQuestions);

  useEffect(() => {
    setNumQuestions(display);
  }, [display]);

  return (
    <LoadMoreButton onClick={() => {
      getMoreQuestions(sort);
      setDisplay(display + 5); }}>
      Load More
    </LoadMoreButton>
  );
}

LoadMore.propTypes = {
  setNumQuestions: PropTypes.func.isRequired,
  numQuestions: PropTypes.number.isRequired,
  getMoreQuestions: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

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
