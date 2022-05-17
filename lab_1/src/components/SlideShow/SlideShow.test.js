import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SlideShow from './SlideShow';

describe('<SlideShow />', () => {
  test('it should mount', () => {
    render(<SlideShow />);
    
    const slideShow = screen.getByTestId('SlideShow');

    expect(slideShow).toBeInTheDocument();
  });
});