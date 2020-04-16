import React, { useState } from 'react';
import classNames from 'classnames';

import NumberSelector from '../NumberSelector/NumberSelector';
import Button from '../Button/Button';
import './BidBox.scss';

export default function BidBox({ submitBid, roundNumber }) {
  const [bid, setBid] = useState(0);
  const formClasses = classNames('bid-box');

  const decrementNumber = () => {
    setBid((prev) => prev - 1);
  };

  const incrementNumber = () => {
    setBid((prev) => prev + 1);
  };

  return (
    <form className={formClasses} onSubmit={(e) => e.preventDefault()}>
      <label>Select Bid:</label>
      <NumberSelector
        min={0}
        max={roundNumber}
        number={bid}
        onIncrement={incrementNumber}
        onDecrement={decrementNumber}
      ></NumberSelector>
      <Button onClick={submitBid}>Submit</Button>
    </form>
  );
}
