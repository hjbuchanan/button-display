import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('displays the button', () => {
    act(() => {
      ReactDOM.render(<App />, container);
  	});
  	const button = container.querySelector('button');
  	expect(button.textContent).toBe('Click Me!');
});

it('shows the text when the button is clicked', () => {
	act(() => {
      ReactDOM.render(<App />, container);
  	});
	 
	const button = container.querySelector('button');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
 	});
  	const text = container.querySelector('p');
  	expect(text.textContent).toBe('This button works.');
});
