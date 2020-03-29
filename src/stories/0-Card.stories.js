import React from 'react';
import Card from '../components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const cardData = {
  number: 2,
  suit: 'clubs',
};

export const twoClubs = () => {
  return <Card cardData={cardData}></Card>;
};
