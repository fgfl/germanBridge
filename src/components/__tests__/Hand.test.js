import React from 'react';
import { render } from '@testing-library/react';

import Hand from '../Hand';
import generateHand from '../../helper/generateHand';

it('has 13 cards in a full hand', () => {
  const { getAllByAltText } = render(<Hand cards={generateHand(12)}></Hand>);

  expect(getAllByAltText(/\d+ spades|hearts|clubs|diamonds/).length).toBe(12);
});
