import React from 'react';

import ReactDOM from 'react-dom';

import axios from 'axios';

import Question from 'Question.jsx';

import QuestionLisst from 'QuestionList.jsx';

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
