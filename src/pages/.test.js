import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import Button from './components/Button';

// teste bem basico. Dentro do componente HomePage, ele faz
// a procura do texto que contem oi.

test('test do texto oi', () => {
  render(<HomePage />);

  const linkElement = screen.getByText(/oi/i);

  expect(linkElement).toBeInTheDocument();
});

// teste basico. Dentro do componente HomePage, ele faz
// a procura do texto que contem salvar.

test('teste texto salvar', () => {
  render(<HomePage />);

  const linkElement = screen.getByText(/salvar/i);

  expect(linkElement).toBeInTheDocument();
});
