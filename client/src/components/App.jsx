import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import QuestionList from './QuestionList.jsx';

import DropDown from './DropDown.jsx';



function App() {

	const [questions, setQuestions] = useState([]);
	const [sort, setSort] = useState(null);

	const getQuestions = () => {
		axios.get('/api/products/questions')
			.then((data) => setQuestions(data.data))
			.catch((err) => (err));
	};
	
	const incrementHelpfulCount = (quesId, ansId, option) => {
		axios.patch(`/api/products/questions/${quesId}/${ansId}/${option}`)
			.then((data) => console.log('data ', data.data[0]))
			.catch((err) => (err));
	};

	useEffect(() => {
    getQuestions();
  });

	// handleHelpfulClick() {
	
	// }

	// nextPage(pageNumber) {
	//extra credit
	// }

  return (
    <div>
      <div>
        <Wrapper>
          <div>
            <QuestionButton>Ask a question</QuestionButton>
            <h3>Questions & Answers</h3>
           <DropDown />
          </div>
        </Wrapper>
        <div>
          <QuestionList questions={questions} incrementHelpfulCount={incrementHelpfulCount}/>
        </div>
      </div>
      <div>
      <LoadMore onClick={() => console.log('clicked')}>Load more</LoadMore></div>
    </div>
  );
}

const Wrapper = styled.section`
margin: auto;
width: 60%;
position: relative;
padding: 10px;
font-family: Stuart, Georgia, serif;
`;

const QuestionButton = styled.button`
background-color: #006699;
color: white;
float: right;
border: none;
padding: 10px;
border-radius: 2px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 16px;
`;

const LoadMore = styled.button`
background-color: light-grey;
color: black;
border: 1px solid;
padding-top: 5px;
padding-bottom: 5px;
display: flex;
justify-content: center;
margin: auto;
width: 20%;
`;

export default App;
