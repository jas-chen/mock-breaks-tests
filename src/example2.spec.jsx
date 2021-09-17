import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

const MyElement = () => (<h1>Cool Element!</h1>);

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// jest.mock(); // the mere presence of the jest.mock comment causes the test to break.

describe('MyElement', () => {


  it('renders', () => {
    act(() => {
      render(<MyElement/>, container);
    });
    expect(container.textContent).toBe('Cool Element!');
  });
});