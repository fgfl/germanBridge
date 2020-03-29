import React from 'react';

import '../scss/Card.scss';
import getCardImage from '../helper/getCardImage';

export default function Card({ cardData }) {
  return (
    <img
      className="card"
      src={`images/SVG-cards-1.3/${getCardImage(cardData)}`}
      alt={`${cardData.number} ${cardData.suit}`}
    ></img>
  );
}
