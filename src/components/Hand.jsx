import React from 'react';

import Card from './Card';

export default function Hand({ cards }) {
  const arrangedCards = cards.map((card) => <Card cardData={card}></Card>);

  return arrangedCards;
}
