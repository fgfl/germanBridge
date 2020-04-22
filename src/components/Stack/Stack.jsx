import React from 'react';
import classNames from 'classnames';

import Card from '../Card/Card';
import '../Card/Card.scss';
import './Stack.scss';

export default function Stack({ cards, isFaceUp, isPreviousStack, flipStack }) {
  const faceDownClass = classNames('card', {
    'card-back': !isFaceUp,
  });
  const leftCardClass = classNames('left-card');
  const topCardClass = classNames('top-card');
  const bottomCardClass = classNames('bottom-card');
  const rightCardClass = classNames('right-card');
  const stackClass = classNames({
    'stack-container': isFaceUp,
  });

  const faceUpCards = [
    cards.left && (
      <Card key={'left'} className={leftCardClass} cardData={cards.left}></Card>
    ),
    cards.top && (
      <Card key={'top'} className={topCardClass} cardData={cards.top}></Card>
    ),
    cards.bottom && (
      <Card
        key={'bottom'}
        className={bottomCardClass}
        cardData={cards.bottom}
      ></Card>
    ),
    cards.right && (
      <Card
        key={'right'}
        className={rightCardClass}
        cardData={cards.right}
      ></Card>
    ),
  ];

  return (
    <div className={stackClass} onClick={(e) => isPreviousStack && flipStack()}>
      {isFaceUp && faceUpCards}
      {!isFaceUp && <div className={faceDownClass}></div>}
    </div>
  );
}
