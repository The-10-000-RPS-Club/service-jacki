import React from 'react';

import moment from 'moment';

const Question = (props) => (
	<div>{console.log(props)}
		<div>{props.question.user} * {moment(props.question.created_at).startOf('hour').fromNow()}</div>
		<h2>{props.question.question_body}</h2>
		<h3>There are {props.question.answers.length} answers for this question.</h3>
		<span>{props.question.answers.map((answer, i) => (
			<div key={i}>
	<p>{answer.user} {moment(answer.created_at).startOf('hour').fromNow()}</p>
	<p>{answer.body}</p>
	<p>Helpful? yes: {answer.helpful.yes} no: {answer.helpful.no}</p>
	</div>
		))}</span>
	</div>
);

export default Question;