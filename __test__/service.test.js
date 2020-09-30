import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App from '../client/src/components/App.jsx';
import QuestionList from '../client/src/components/QuestionList.jsx';
import Question from '../client/src/components/Question.jsx';
import Helpful from '../client/src/components/Helpful.jsx';
import DropDown from '../client/src/components/DropDown.jsx';
import sampleData from '../database/sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe('App component tests', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div id="list-container">Bar</div>)).toBe(false);
  });
});

describe('A suite example using Snapshot',  () => {
  it('renders App component correctly', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('renders Dropdown component correctly', () => {
	const tree = renderer
		.create(<DropDown />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('renders QuestionList component correctly', () => {
	const tree = renderer
		.create(<QuestionList questions={sampleData} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
