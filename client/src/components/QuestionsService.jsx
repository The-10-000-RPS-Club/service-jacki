/* eslint-disable max-len */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import QuestionList from './QuestionList.jsx';
import DropDown from './DropDown.jsx';
import LoadMore from './LoadMore.jsx';
import AskQuestion from './AskQuestion.jsx';

function QuestionsService() {
  const [questions, setQuestions] = useState([]);
  const [numQuestions, setNumQuestions] = useState(5);
  const [asking, setAsking] = useState(false);
  const [sort, setSort] = useState('select');

  const getSortedQuestions = () => {
    axios.get(`/api/products/questions/sort/${sort}`)
      .then((sorted) => setQuestions((sorted.data)))
      .catch((err) => (err));
  };
  const getMoreQuestions = () => {
    axios.get(`/api/products/questions/sort/${sort}`)
      .then((data) => setQuestions(questions.concat(data.data)))
      .catch((err) => (err));
  };
  const incrementHelpfulCount = (quesId, ansId, option) => {
    axios.patch(`/api/products/questions/${quesId}/${ansId}/${option}`)
      .then(() => console.log(`${option} count increased`))
      .catch((err) => (err));
  };

  useEffect(() => {
    getSortedQuestions(sort);
  }, [sort]);

  return (
    <div>
      <div>
        <Wrapper>
          <QuestionButton onClick={() => {
            setAsking(true);
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          }}>
            Ask a question
          </QuestionButton>
          <div>
            <Title>
              <div>Questions & Answers</div>
            </Title>
            <DropDown questions={questions} setQuestions={setQuestions} sort={sort} setSort={setSort} />
          </div>
        </Wrapper>
        <div>
          <QuestionList questions={questions} incrementHelpfulCount={incrementHelpfulCount} />
        </div>
      </div>
      <div>
        <LoadMore numQuestions={numQuestions} setNumQuestions={setNumQuestions} sort={sort} getMoreQuestions={getMoreQuestions} />
      </div>
      <AskQuestion asking={asking} setAsking={setAsking} />
      <Footer>
        <p>How are we doing? Give us feedback on this page.</p>
        <h2>Sign up for REI emails</h2>
        <p>Co-op offers, events & cool new gear</p>
        Email
        <form>
          <input type="text" />
          <SignUpButton>Sign me up!</SignUpButton>
        </form>
      </Footer>
      <BlackBox>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
        <p>Other Stuff</p>
      </BlackBox>
    </div>
  );
}

const BlackBox = styled.div`
background-color: black;
color: white;
width: 110%;
display: grid;
grid-template-columns: repeat(6, 300px);
grid-template-rows: repeat(2, 100px);
grid-gap: 30px;
padding-left: 50px;
`;

const SignUpButton = styled.button`
color: white;
border: none;
background-color: black;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
margin-left: 5px;
font-size: 14px;
`;

const Wrapper = styled.section`
margin: auto;
width: 52%;
position: relative;
padding: 10px;
font-family: Stuart, Georgia, serif;
`;

const Title = styled.div`
font-family: Stuart, Georgia, serif;
font-size: 22px;
padding 10px;
position: relative;
padding-bottom: 30px;
padding-left: 0px;
width: 300px;
`;

const QuestionButton = styled.button`
background-color: #3973A1;
color: white;
border: none;
float: right;
padding: 13px;
border-radius: 3px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
cursor: pointer;
&:hover {
background-color: #2B455C;
}
`;

const Footer = styled.div`
margin: auto;
text-align: center;
width: 75%;
position: relative;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
border-bottom: 1px solid grey;
font-size: 14px;
`;

export default QuestionsService;
