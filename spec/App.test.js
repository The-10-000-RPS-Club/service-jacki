import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../client/src/components/index.js';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div className="app">Hello</div>)).toBe(true);
  });