import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import Stack from './Stack';

const cards = { bottom: {}, left: {}, top: {}, right: {} };
let flipStackFn = jest.fn();
beforeEach(() => {
  cards.bottom = { number: 1, suit: 'spades' };
  cards.left = { number: 2, suit: 'hearts' };
  cards.top = { number: 3, suit: 'clubs' };
  cards.right = { number: 4, suit: 'diamonds' };
  flipStackFn = jest.fn();
});
afterEach(cleanup);

it('renders cards faced up', () => {
  const { getByAltText } = render(
    <Stack
      cards={cards}
      isFaceUp
      isPreviousStack
      flipStack={flipStackFn}
    ></Stack>
  );
  expect(getByAltText('1 spades')).toBeInTheDocument();
  expect(getByAltText('2 hearts')).toBeInTheDocument();
  expect(getByAltText('3 clubs')).toBeInTheDocument();
  expect(getByAltText('4 diamonds')).toBeInTheDocument();
});

it('renders the stack faced down', () => {
  const { queryByAltText } = render(
    <Stack
      cards={cards}
      isFaceUp={false}
      isPreviousStack
      flipStack={flipStackFn}
    ></Stack>
  );
  expect(queryByAltText('1 spades')).toBeNull();
  expect(queryByAltText('2 hearts')).toBeNull();
  expect(queryByAltText('3 clubs')).toBeNull();
  expect(queryByAltText('4 diamonds')).toBeNull();
});

it('renders just one card', () => {
  delete cards.top;
  delete cards.left;
  delete cards.right;
  const { queryAllByAltText } = render(<Stack cards={cards} isFaceUp></Stack>);
  expect(queryAllByAltText('1 spades')).toHaveLength(1);
});

it('renders just two card', () => {
  delete cards.top;
  delete cards.left;
  cards.right = cards.bottom;
  const { queryAllByAltText } = render(<Stack cards={cards} isFaceUp></Stack>);
  expect(queryAllByAltText('1 spades')).toHaveLength(2);
});

it('renders just three card', () => {
  delete cards.top;
  cards.left = cards.bottom;
  cards.right = cards.bottom;
  const { queryAllByAltText } = render(<Stack cards={cards} isFaceUp></Stack>);
  expect(queryAllByAltText('1 spades')).toHaveLength(3);
});

xit('places the left card in the left position', () => {});
xit('places the top card in the top position', () => {});
xit('places the bottom card in the bottom position', () => {});
xit('places the right card in the right position', () => {});

it('calls the flip function if it was the previous stack', () => {
  const { queryByAltText } = render(
    <Stack
      cards={cards}
      isFaceUp
      isPreviousStack
      flipStack={flipStackFn}
    ></Stack>
  );
  const stackElement = queryByAltText('1 spades').parentElement;
  fireEvent.click(stackElement);
  expect(flipStackFn).toHaveBeenCalledTimes(1);
});

it('does not call the flip function if the stack in in play', () => {
  const { queryByAltText } = render(
    <Stack
      cards={cards}
      isFaceUp
      isPreviousStack={false}
      flipStack={flipStackFn}
    ></Stack>
  );
  const stackElement = queryByAltText('1 spades').parentElement;
  fireEvent.click(stackElement);
  expect(flipStackFn).toHaveBeenCalledTimes(0);
});
