import React from 'react';

import { render } from '@testing-library/react';

import Card from '../Card';

it('renders the correct card when the card data is passed in', () => {
  const cardData = {
    number: 2,
    suit: 'clubs',
  };

  const { getByAltText } = render(<Card cardData={cardData}></Card>);
  expect(getByAltText('2 clubs')).toBeInTheDocument();
});
