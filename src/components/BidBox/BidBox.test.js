import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import BidBox from './BidBox';

afterEach(cleanup);

it('renders the BidBox', () => {
  const { getByText } = render(<BidBox roundNumber={3}></BidBox>);
  expect(getByText('Select Bid:')).toBeInTheDocument();
});

it('does not increment pass the max number if the up arrow is pressed', () => {
  const { getByText, getByLabelText } = render(
    <BidBox roundNumber={3}></BidBox>
  );
  const upButton = getByLabelText('upButton');

  fireEvent.click(upButton);
  fireEvent.click(upButton);
  fireEvent.click(upButton);
  fireEvent.click(upButton);

  expect(getByText('3')).toBeInTheDocument();
});

it('does not decrement pass the min number if the up arrow is pressed', () => {
  const { getByText, getByLabelText } = render(
    <BidBox roundNumber={3}></BidBox>
  );
  const upButton = getByLabelText('upButton');
  const downButton = getByLabelText('downButton');

  fireEvent.click(upButton);
  fireEvent.click(upButton);
  fireEvent.click(downButton);
  fireEvent.click(downButton);
  fireEvent.click(downButton);

  expect(getByText('0')).toBeInTheDocument();
});

it('calls the submit function once when the submit button is clicked', () => {
  const submitBid = jest.fn();
  const { getByText } = render(
    <BidBox submitBid={submitBid} roundNumber={3}></BidBox>
  );
  const submitBtn = getByText('Submit');

  fireEvent.click(submitBtn);

  expect(submitBid).toHaveBeenCalledTimes(1);
});
