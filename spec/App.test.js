import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../client/src/components/index.js';

it('renders without crashing', () => {
	const div = document.getElementById('div');
	ReactDOM.render(<App />, div);
	console.log('true');
	ReactDOM.unmountComponentAtNode(div);
});