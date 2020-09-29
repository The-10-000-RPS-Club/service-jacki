import React from 'react';

import axios from 'axios';

import styled from 'styled-components';

import QuestionList from './QuestionList.jsx';

const Wrapper = styled.section`
margin: auto;
width: 50%;
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

const Sort = styled.div`
color: black;
float: right;
margin-bottom: 20px;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 14px;
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      totalQuestions: 0,
    };
    this.getQuestions = this.getQuestions.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/api/products/questions')
      .then((data) => this.setState({ questions: data.data }))
      .catch((err) => console.log(err));
	}
	
  // nextPage(pageNumber) {
	//extra credit
	// }

	// incrementHelpful(choice) {
	// 	axios.patch('')
	// }

  render() {
    return (
      <div>
        <div>
          <Wrapper>
            <div>
              <QuestionButton>Ask a question</QuestionButton>
              <h3>Questions & Answers</h3>
              <Sort><p>Sort by: <select></select>&#9662;</p></Sort>
            </div>
          </Wrapper>
          <div><QuestionList questions={this.state.questions} /></div>
        </div>
        <div><LoadMore onClick={() => console.log('clicked')}>Load more</LoadMore></div>
      </div>
    );
  }
}

export default App;
