import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const QuestionList = ({ questions, incrementHelpfulCount }) => (
  <div>
	<Wrapper><p>{questions.length} Questions</p></Wrapper>
  {questions.map((question, i) => (
    <Question question={question} key={i} incrementHelpfulCount={incrementHelpfulCount}/>
    ))}
  </div>
);

const Wrapper = styled.section`
margin: auto;
width: 60%;
position: relative;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 14px;
`;

export default QuestionList;
