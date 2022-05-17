import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputTest from './InputTest';

describe('<InputTest />', () => {
  test('it should mount', () => {
    render(<InputTest />);
    
    const inputTest = screen.getByTestId('InputTest');

    expect(inputTest).toBeInTheDocument();
  });
});