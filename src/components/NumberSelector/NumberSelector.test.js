import React from 'react';

import { render, cleanup } from '@testing-library/react';

import NumberSelector from './NumberSelector';

afterEach(cleanup);

it('renders a default number selector starting at 0', () => {
  const { getByText } = render(<NumberSelector></NumberSelector>);
  expect(getByText('0')).toBeInTheDocument();
});
