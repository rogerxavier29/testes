import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

// teste bem basico. Dentro do componente HomePage, ele faz
// a procura do texto que contem oi.

test('test do texto oi', () => {
  render(<HomePage />);

  const linkElement = screen.getByText(/oi/i);

  expect(linkElement).toBeInTheDocument();
});



