import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import NumberSelector from './NumberSelector';

afterEach(cleanup);

it('renders a default number selector starting at the initial number', () => {
  const { getByText } = render(
    <NumberSelector min={0} max={13} number={0}></NumberSelector>
  );
  expect(getByText('0')).toBeInTheDocument();
});

it('calls the increment function if the up arrow is pressed', () => {
  const incrementNumber = jest.fn();
  const { getByLabelText } = render(
    <NumberSelector
      min={0}
      max={13}
      number={0}
      onIncrement={incrementNumber}
    ></NumberSelector>
  );
  const upButton = getByLabelText('upButton');

  fireEvent.click(upButton);

  expect(incrementNumber).toHaveBeenCalledTimes(1);
});

it('calls the decrement function if the down arrow is pressed', () => {
  const decrementNumber = jest.fn();
  const { getByLabelText } = render(
    <NumberSelector
      min={0}
      max={13}
      onDecrement={decrementNumber}
    ></NumberSelector>
  );
  const downButton = getByLabelText('downButton');

  fireEvent.click(downButton);

  expect(decrementNumber).toHaveBeenCalledTimes(1);
});
