import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

import styled from 'styled-components';

import QuestionList from './components/QuestionList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    axios.get('/api/products/questions')
      .then((data) => this.setState({ questions: data.data }))
      .catch((err) => console.log(err));
  }

  
  render() {
    const Wrapper = styled.section`
      margin: auto;
      width: 50%;
      position: relative;
  `;
    return (
        <div>
            <Wrapper><h3>Questions & Answers</h3></Wrapper>
      <div><QuestionList questions={this.state.questions}/></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
