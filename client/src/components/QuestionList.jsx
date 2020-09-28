import React from 'react';
import Question from './Question.jsx';

const QuestionList = (props) => (
  <div>
	<p>There are {props.questions.length} questions for this product.</p>
  {props.questions.map((question, i) => (
    <Question question={question} key={i} />
    ))}
  </div>
);

export default QuestionList;
