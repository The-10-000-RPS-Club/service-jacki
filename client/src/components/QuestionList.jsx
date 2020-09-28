import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';

const Wrapper = styled.section`
margin: auto;
width: 50%;
position: relative;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 14px;
`;

const QuestionList = (props) => (
  <div>
	<Wrapper><p>{props.questions.length} Questions</p></Wrapper>
  {props.questions.map((question, i) => (
    <Question question={question} key={i} />
    ))}
  </div>
);

export default QuestionList;
