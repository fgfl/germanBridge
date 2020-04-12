import React, { useState } from 'react';

import './NumberSelector.scss';

import TriangleButton from '../TriangleButton/TriangleButton';

export default function NumberSelector({ min, max }) {
  const [number, setNumber] = useState(min);

  const decrementNumber = () => {
    setNumber((prev) => prev - 1);
  };

  const incrementNumber = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <div className={'number-selector'}>
      <TriangleButton
        down
        disabled={number === min}
        onClick={decrementNumber}
      ></TriangleButton>
      <p>{number}</p>
      <TriangleButton
        up
        disabled={number === max}
        onClick={incrementNumber}
      ></TriangleButton>
    </div>
  );
}
