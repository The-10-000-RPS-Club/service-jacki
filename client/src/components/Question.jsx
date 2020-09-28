import React from 'react';

import moment from 'moment';

import styled from 'styled-components';

const Wrapper = styled.section`
	margin: auto;
	width: 50%;
	border-bottom: 1px solid grey;
	border-top: 1px solid grey;
	padding: 10px;
	position: relative;
`;

const HelpfulButton = styled.button`
	background-color: white;
	border: 1px solid grey;
`;

const AnswerNumber = styled.section`
	float: right;
	text-align: center;
`;

const Question = (props) => (
	<Wrapper>
	<div>
		<AnswerNumber><p>{props.question.answers.length}</p><p>{'\n'}answers</p></AnswerNumber>
		<div>{props.question.user} * {moment(props.question.created_at).startOf('hour').fromNow()}</div>
		<h3>{props.question.question_body}</h3>
		
		<span>{props.question.answers.map((answer, i) => (
			<div key={i}>
	<p>{answer.user} {moment(answer.created_at).startOf('hour').fromNow()}</p>
	<p>{answer.body}</p>
	<p>Helpful? <HelpfulButton>yes: {answer.helpful.yes}</HelpfulButton> <HelpfulButton>no: {answer.helpful.no}</HelpfulButton></p>
	</div>
		))}</span>
	</div>
	</Wrapper>
);

export default Question;