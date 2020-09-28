import React from 'react';

import moment from 'moment';

import styled from 'styled-components';

const Wrapper = styled.section`
	margin: auto;
	width: 50%;
	border-top: 1px solid grey;
	padding: 10px;
	position: relative;
	font-family: Stuart, Georgia, serif;
	padding-bottom: 10 px;
	margin-bottom: 10px;
`;

const HelpfulButton = styled.button`
	background-color: white;
	border: 1px solid grey;
	border-radius: 2px;
`;

const AnswerNumber = styled.section`
	float: right;
	text-align: center;
	border-radius: 2px;
`;

const AnswerButton = styled.button`
	border: 1px solid grey;
	padding: 6px;
	background-color: white;
	margin: 10px;
	border-radius: 2px;
`;

const User = styled.div`
	font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
	font-size: 16px;
	font-weight: 700;
`;

const Question = (props) => (
	<Wrapper>
	<div>
		<AnswerNumber><p>{props.question.answers.length}</p><p>{'\n'}answers</p></AnswerNumber>
		<div><User>{props.question.user}</User><span>&#183;</span> {moment(props.question.created_at).startOf('hour').fromNow()}</div>
		<h3>{props.question.question_body}</h3>
		<AnswerButton>Answer the question</AnswerButton>
	<p>{props.question.answers[0].user} <span>&#183;</span> {moment(props.question.answers[0].created_at).startOf('hour').fromNow()}</p>
	<p>{props.question.answers[0].body}</p>
	<p>Helpful? <HelpfulButton>yes: {props.question.answers[0].helpful.yes}</HelpfulButton> <HelpfulButton>no: {props.question.answers[0].helpful.no}</HelpfulButton> <HelpfulButton>Report as inappropriate</HelpfulButton> </p>
	</div>
	</Wrapper>
);

export default Question;