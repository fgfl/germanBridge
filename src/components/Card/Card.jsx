import React from 'react';
import classNames from 'classnames';

import './Card.scss';
import getCardImage from '../../helper/getCardImage';

/**
 *
 * @param {{number: number, suit: String}} props cardData - object with suit('spades, hearts, clubs, diamonds') and number (1-13)
 */
export default function Card({ cardData, className }) {
  const cardClass = classNames('card', className);

  return (
    <img
      className={cardClass}
      src={`images/SVG-cards-1.3/${getCardImage(cardData)}`}
      alt={`${cardData.number} ${cardData.suit}`}
    ></img>
  );
}
