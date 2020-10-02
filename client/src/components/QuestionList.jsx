/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Question from './Question.jsx';

const QuestionList = ({ questions, incrementHelpfulCount }) => (
  <div>
    <Wrapper><p>1-{questions.length} of {questions.length} Questions</p></Wrapper>
    {questions.map((question, i) => (
      <Question
        question={question}
        key={i}
        incrementHelpfulCount={incrementHelpfulCount} />
    ))}
  </div>
);

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  incrementHelpfulCount: PropTypes.func.isRequired,
};

const Wrapper = styled.section`
margin: auto;
width: 52%;
position: relative;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
`;

export default QuestionList;
