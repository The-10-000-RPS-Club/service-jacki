import React from 'react';

import moment from 'moment';

import styled from 'styled-components';

import Answer from './Answer.jsx';

import Helpful from './Helpful.jsx';

const Question = ({incrementHelpfulCount, question}) => (
	<div>
	<Wrapper>
	<div>
	<AnswerNumber><p>{question.answers.length}</p><AnswerText><p>answers</p></AnswerText></AnswerNumber>
		<div><User>{question.user} &#183; <QuestionTime>{moment(question.created_at).startOf('hour').fromNow()}</QuestionTime></User></div>
		<QuestionBody><p href='#'>{question.question_body}</p></QuestionBody>
		<AnswerButton>Answer the question</AnswerButton>
	</div>
	<Answer question={question} />
	<Helpful question={question} incrementHelpfulCount={incrementHelpfulCount}/>
	</Wrapper>
	</div>
);

const Wrapper = styled.section`
	margin: auto;
	width: 60%;
	border-top: 1px solid grey;
	padding: 10px;
	position: relative;
	font-family: Stuart, Georgia, serif;
	padding-bottom: 10 px;
	margin-bottom: 10px;
`;

const AnswerNumber = styled.section`
	float: right;
	text-align: center;
	border-radius: 2px;
	font-size: 16px;
`;

const AnswerButton = styled.button`
	border: 1px solid grey;
	padding: 6px;
	background-color: white;
	margin: 10px;
	border-radius: 2px;
	margin-bottom: 40px;
	margin-left: 0px
`;

const QuestionTime = styled.button`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
	border: none;
	background-color: white;
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
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
padding-bottom: 15px;
`;

const AnswerText = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size 14px;
`;

export default Question;
