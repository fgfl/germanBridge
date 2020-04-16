import React from 'react';

import './NumberSelector.scss';
import TriangleButton from '../TriangleButton/TriangleButton';

export default function NumberSelector({
  min,
  max,
  number,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className={'number-selector'}>
      <TriangleButton
        down
        disabled={number === min}
        onClick={onDecrement}
      ></TriangleButton>
      <p>{number}</p>
      <TriangleButton
        up
        disabled={number === max}
        onClick={onIncrement}
      ></TriangleButton>
    </div>
  );
}
