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
	&:hover {
    box-shadow: inset 0 0 3px #000000;
  }
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
	margin-bottom: 40px;
`;

const QuestionTime = styled.button`
	font-family: Stuart, Georgia, serif;
	border: none;
`;

const User = styled.div`
	font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
	font-size: 15px;
	font-weight: 700;
`;

const QuestionBody = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 18px;
font-weight: 700;
margin-bottom: 40px;
`;

const AnswerBody = styled.div`
font-family: Stuart, Georgia, serif;
padding-bottom: 15px;
`;

const Question = (props) => (
	<Wrapper>
	<div>
		<AnswerNumber><p>{props.question.answers.length}</p><p>answers</p></AnswerNumber>
		<div><User>{props.question.user} &#183; <QuestionTime>{moment(props.question.created_at).startOf('hour').fromNow()}</QuestionTime></User></div>
		<QuestionBody><p href='#'>{props.question.question_body}</p></QuestionBody>
		<AnswerButton>Answer the question</AnswerButton>
	<div><User>{props.question.answers[0].user} &#183; <QuestionTime>{moment(props.question.answers[0].created_at).startOf('hour').fromNow()}</QuestionTime></User></div>
	<AnswerBody><p>{props.question.answers[0].body}</p></AnswerBody>
	<p>Helpful? <HelpfulButton className='yes' onClick={() => console.log(event.target.className)}>yes: {props.question.answers[0].helpful.yes}</HelpfulButton> <HelpfulButton className='no'>no: {props.question.answers[0].helpful.no}</HelpfulButton> <HelpfulButton>Report as inappropriate</HelpfulButton> </p>
	</div>
	</Wrapper>
);

export default Question;
