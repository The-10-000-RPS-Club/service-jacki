import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

import Question from './components/Question.jsx';

import QuestionList from './components/QuestionList.jsx';

class App extends React.Component {
constructor(props) {
        super(props);
    }

  render() {
    return(
    <div><QuestionList /></div>
    )
   }
}

ReactDOM.render(<App />, document.getElementById('app'));
