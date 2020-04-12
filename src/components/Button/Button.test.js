import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import Button from './Button';

afterEach(cleanup);

it('renders the "children" text', () => {
  const { getByText } = render(<Button>Test</Button>);
  expect(getByText('Test')).toBeInTheDocument();
});

it('renders a clickable button', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>Clickable</Button>
  );
  const button = getByText('Clickable');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('renders a disabled button', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick} disabled={true}>
      Disabled
    </Button>
  );
  const button = getByText('Disabled');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
