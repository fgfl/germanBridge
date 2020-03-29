export default function getCardImage(cardData) {
  const numToString = {
    1: 'ace',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    11: 'jack',
    12: 'queen',
    13: 'king',
  };
  return `${numToString[cardData.number]}_of_${cardData.suit}.svg`;
}
