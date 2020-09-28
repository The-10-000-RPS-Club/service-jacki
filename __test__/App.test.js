import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('App component tests', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div id="list-container">Bar</div>)).toBe(false);
  });
});
