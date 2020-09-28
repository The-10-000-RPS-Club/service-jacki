import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => (
  <div>
	<h1>There are {props.questions.length} questions for this product.</h1>
  {props.questions.map((question, i) => (
    <Question question={question} key={i} />
    ))}
  </div>
);

export default QuestionList;
