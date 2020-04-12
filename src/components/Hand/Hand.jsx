import React, { Fragment } from 'react';

import Card from '../Card/Card';

export default function Hand({ cards }) {
  const sortLargestFirst = (a, b) => {
    return b.number - a.number;
  };

  const spades = cards
    .filter((card) => card.suit === 'spades')
    .sort(sortLargestFirst)
    .map((card, index) => <Card key={index} cardData={card}></Card>);
  const hearts = cards
    .filter((card) => card.suit === 'hearts')
    .sort(sortLargestFirst)
    .map((card, index) => <Card key={index} cardData={card}></Card>);
  const clubs = cards
    .filter((card) => card.suit === 'clubs')
    .sort(sortLargestFirst)
    .map((card, index) => <Card key={index} cardData={card}></Card>);
  const diamonds = cards
    .filter((card) => card.suit === 'diamonds')
    .sort(sortLargestFirst)
    .map((card, index) => <Card key={index} cardData={card}></Card>);

  return (
    <Fragment>
      <div>{spades}</div>
      <div>{hearts}</div>
      <div>{clubs}</div>
      <div>{diamonds}</div>
    </Fragment>
  );
}
