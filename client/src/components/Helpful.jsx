/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Helpful = ({ question, incrementHelpfulCount }) => {
  const [quesId] = useState(question.question_id);
  const [ansId] = useState(question.answers[0]._id);
  const [yes, setYes] = useState(question.answers[0].helpful.yes);
  const [no, setNo] = useState(question.answers[0].helpful.no);

  return (
    <p>
      Helpful? <HelpfulButton className='yes' onClick={() => {
				incrementHelpfulCount(quesId, ansId, 'yes');
				setYes(yes + 1);
				}}>yes: {yes}</HelpfulButton> <HelpfulButton className='no' onClick={() => {
					incrementHelpfulCount(quesId, ansId, 'no');
					setNo(no + 1);
					}}>no: {no}</HelpfulButton> <HelpfulButton>Report as inappropriate</HelpfulButton>
    </p>
  );
};

const HelpfulButton = styled.button`
  background-color: white;
  border: 1px solid grey;
  border-radius: 2px;
  &:hover {
    box-shadow: inset 0 0 3px #000000;
  }
  position: relative;
`;

export default Helpful;
