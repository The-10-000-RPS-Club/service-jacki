import React, { useState } from 'react';

import moment from 'moment';

import styled from 'styled-components';

import Answer from './Answer.jsx';

import Helpful from './Helpful.jsx';

import AnswerModal from './AnswerModal.jsx';

const Question = ({incrementHelpfulCount, question}) => {
	const [show, setShow] = useState(false);

	const showModal = () => {
		setShow(true);
	};

	return(
	<div>
	<Wrapper>
	<div>
	<AnswerNumber>{question.answers.length}<AnswerText>answers</AnswerText></AnswerNumber>
		<div><User>{question.user} &#183; <QuestionTime>{moment(question.created_at).startOf('hour').fromNow()}</QuestionTime></User></div>
		<QuestionBody><p>{question.question_body}</p></QuestionBody>
		<AnswerButton onClick={() => showModal()}>Answer the question</AnswerButton>
	</div>
	<Answer question={question} />
	<Helpful question={question} incrementHelpfulCount={incrementHelpfulCount}/>
	</Wrapper>
		<AnswerModal show={show} setShow={setShow} question={question} incrementHelpfulCount={incrementHelpfulCount}/>
		{show ? <PageMask /> : null}
	</div>
	);
};

const PageMask = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Wrapper = styled.section`
	margin: auto;
	width: 52%;
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
	cursor: pointer;
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
	margin-left: 6px;
`;

const QuestionBody = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 18px;
font-weight: 700;
margin-bottom: 40px;
`;

const AnswerText = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size 14px;
`;


export default Question;
