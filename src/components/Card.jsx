import React from 'react';

import getCardImage from '../helper/getCardImage';

export default function Card({ cardData }) {
  return (
    <img
      src={`src/images/SVG-cards-1.3/2_of_clubs.svg`}
      alt={`${cardData.number} ${cardData.suit}`}
    ></img>
  );
}
