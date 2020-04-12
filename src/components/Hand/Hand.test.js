import React from 'react';
import { render } from '@testing-library/react';

import Hand from '../Hand';
import generateHand from '../../helper/generateHand';

const altTextRegex = /\d+ spades|hearts|clubs|diamonds/;

it('has 1 card', () => {
  const { getAllByAltText } = render(<Hand cards={generateHand(1)}></Hand>);
  expect(getAllByAltText(altTextRegex).length).toBe(1);
});

it('has 13 cards in a full hand', () => {
  const { getAllByAltText } = render(<Hand cards={generateHand(13)}></Hand>);
  expect(getAllByAltText(altTextRegex).length).toBe(13);
});
