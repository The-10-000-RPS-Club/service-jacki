import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { App } from '../client/src/components/index.js';

describe('My Component', () => {
	it('should be true', () => {
		const foo = true;
		expect(foo).toBe(true);
	});
});

describe('App', () => {
	it('should contain text', () => {
		const wrapper = shallow(<App />);
		const text = wrapper.find('div div');
		expect(text.text()).toBe('Hello');
	});
});