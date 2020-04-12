import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import TriangleButton from './TriangleButton';

afterEach(cleanup);

it('renders an up facing triangle button', () => {
  const { getByRole } = render(<TriangleButton up></TriangleButton>);
  expect(getByRole('button')).toHaveClass('triangle-up');
});

it('renders an down facing triangle button', () => {
  const { getByRole } = render(<TriangleButton down></TriangleButton>);
  expect(getByRole('button')).toHaveClass('triangle-down');
});

it('renders an left facing triangle button', () => {
  const { getByRole } = render(<TriangleButton left></TriangleButton>);
  expect(getByRole('button')).toHaveClass('triangle-left');
});

it('renders an right facing triangle button', () => {
  const { getByRole } = render(<TriangleButton right></TriangleButton>);
  expect(getByRole('button')).toHaveClass('triangle-right');
});

it('renders a clickable triangle button', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(
    <TriangleButton up onClick={handleClick}></TriangleButton>
  );
  const button = getByRole('button');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('renders an unclickable disabled triangle button', () => {
  const handleClick = jest.fn();
  const { getByRole } = render(
    <TriangleButton up disabled={true} onClick={handleClick}></TriangleButton>
  );
  const button = getByRole('button');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
