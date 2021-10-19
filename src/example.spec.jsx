import './mockBanana';
import React from 'react';
import { render } from '@testing-library/react';
import MyElement from './MyElement';

describe('MyElement', () => {
  it('renders', () => {
    const { getByTestId } = render(<MyElement />);
    expect(getByTestId('banana-container')).toHaveTextContent('fake value')
  });
});