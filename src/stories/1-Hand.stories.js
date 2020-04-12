import React from 'react';
import { storiesOf } from '@storybook/react';

import Hand from '../components/Hand/Hand';
import generateHand from '../helper/generateHand';

storiesOf('Hand', module)
  .add('1 card', () => <Hand cards={generateHand(1)}></Hand>)
  .add('2 cards', () => <Hand cards={generateHand(2)}></Hand>)
  .add('3 cards', () => <Hand cards={generateHand(3)}></Hand>)
  .add('4 cards', () => <Hand cards={generateHand(4)}></Hand>)
  .add('5 cards', () => <Hand cards={generateHand(5)}></Hand>)
  .add('6 cards', () => <Hand cards={generateHand(6)}></Hand>)
  .add('7 cards', () => <Hand cards={generateHand(7)}></Hand>)
  .add('8 cards', () => <Hand cards={generateHand(8)}></Hand>)
  .add('9 cards', () => <Hand cards={generateHand(9)}></Hand>)
  .add('10 cards', () => <Hand cards={generateHand(10)}></Hand>)
  .add('11 cards', () => <Hand cards={generateHand(11)}></Hand>)
  .add('12 cards', () => <Hand cards={generateHand(12)}></Hand>)
  .add('13 cards', () => <Hand cards={generateHand(13)}></Hand>);
