/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import moment from 'moment';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Answer = ({ question }) => (
  <div>
    <div>
      <User>
        {question.answers[0].user} &#183; <QuestionTime>{moment(question.answers[0].created_at).startOf('hour').fromNow()}</QuestionTime>
      </User>
    </div>
    <AnswerBody><p>{question.answers[0].body}</p></AnswerBody>
  </div>
);

Answer.propTypes = {
  question: PropTypes.shape().isRequired,
};

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

const AnswerBody = styled.div`
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
padding-bottom: 15px;
`;

export default Answer;
