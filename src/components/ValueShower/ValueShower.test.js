import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ValueShower from './ValueShower';

const keyText = 'theKey';
const value = 5;

it('renders the children text as the key', () => {
  const { getByText } = render(
    <ValueShower value={value}>{keyText}</ValueShower>
  );
  expect(getByText(/theKey/)).toBeInTheDocument();
});

it('renders the value given', () => {
  const { getByText } = render(
    <ValueShower value={value}>{keyText}</ValueShower>
  );
  expect(getByText(/5/)).toBeInTheDocument();
});
