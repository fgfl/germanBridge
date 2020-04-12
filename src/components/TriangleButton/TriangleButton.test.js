import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import TriangleButton from './TriangleButton';

afterEach(cleanup);

it('renders an up facing triangle button', () => {
  const { getByLabelText } = render(<TriangleButton up></TriangleButton>);
  expect(getByLabelText('upButton')).toHaveClass('triangle-up');
});

it('renders an down facing triangle button', () => {
  const { getByLabelText } = render(<TriangleButton down></TriangleButton>);
  expect(getByLabelText('downButton')).toHaveClass('triangle-down');
});

it('renders an left facing triangle button', () => {
  const { getByLabelText } = render(<TriangleButton left></TriangleButton>);
  expect(getByLabelText('leftButton')).toHaveClass('triangle-left');
});

it('renders an right facing triangle button', () => {
  const { getByLabelText } = render(<TriangleButton right></TriangleButton>);
  expect(getByLabelText('rightButton')).toHaveClass('triangle-right');
});

it('renders a clickable triangle button', () => {
  const handleClick = jest.fn();
  const { getByLabelText } = render(
    <TriangleButton up onClick={handleClick}></TriangleButton>
  );
  const button = getByLabelText('upButton');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it('renders an unclickable disabled triangle button', () => {
  const handleClick = jest.fn();
  const { getByLabelText } = render(
    <TriangleButton up disabled={true} onClick={handleClick}></TriangleButton>
  );
  const button = getByLabelText('upButton');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
