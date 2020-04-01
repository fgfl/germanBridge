// This function is for testing purpose only. It can generate duplicate cards
const generateHand = (numberOfCards) => {
  const suits = {
    1: 'spades',
    2: 'hearts',
    3: 'clubs',
    4: 'diamonds',
  };
  const hand = [];

  for (let i = 0; i < numberOfCards; i++) {
    hand[i] = {
      number: Math.ceil(Math.random() * 13),
      suit: suits[Math.ceil(Math.random() * 4)],
    };
  }

  return hand;
};

export default generateHand;
