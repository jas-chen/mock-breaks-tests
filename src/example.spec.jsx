import React from 'react';

import { render, act } from '@testing-library/react';
import jestConfig from '../jest.config';

const MyElement = () => (<h1>Cool Element!</h1>);

// jest.mock(); // the mere presence of the jest.mock comment causes the test to break.

describe('MyElement', () => {
  it('renders', async () => {
    await act(async () => render(<MyElement/>));
  });
});