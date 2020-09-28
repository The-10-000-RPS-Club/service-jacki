import React from 'react';
import styled from 'styled-components';
import Question from './Question.jsx';


const Wrapper = styled.section`
margin: auto;
width: 50%;
position: relative;
`;

const QuestionList = (props) => (
  <div>
	<Wrapper><p>{props.questions.length} questions</p></Wrapper>
  {props.questions.map((question, i) => (
    <Question question={question} key={i} />
    ))}
  </div>
);

export default QuestionList;
