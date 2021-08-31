import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

// Feito teste onde é feito a conferencia do type do button, o mesmo
//deve ser submit, caso contrario dara erro no teste.

test('teste type button', () => {
  const { queryByTestId } = render(<Button />);

  const btnElement = queryByTestId('my-button');
  expect(btnElement).toHaveAttribute('type', 'submit');
});
