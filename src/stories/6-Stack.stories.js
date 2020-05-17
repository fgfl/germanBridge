import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Stack from '../components/Stack/Stack';
import generateHand from '../helper/generateHand';

const cards = {
  bottom: generateHand(1)[0],
  left: generateHand(1)[0],
  top: generateHand(1)[0],
  right: generateHand(1)[0],
};

storiesOf('Stack', module)
  .add('Facing down', () => <Stack isFaceUp={false} cards={{}}></Stack>)
  .add('Facing Up', () => <Stack cards={cards} isFaceUp={true}></Stack>)
  .add('Clickable Facing down', () => (
    <Stack
      cards={{}}
      isFaceUp={false}
      isPreviousStack
      flipStack={action('flipping_stack')}
    ></Stack>
  ))
  .add('Clickable Facing Up', () => (
    <Stack
      cards={cards}
      isFaceUp={true}
      isPreviousStack
      flipStack={action('flipping_stack')}
    ></Stack>
  ))
  .add('Not Previous stack. Not clickable', () => (
    <Stack
      cards={cards}
      isFaceUp
      isPreviousStack={false}
      flipStack={action(`I shouldn't be called`)}
    ></Stack>
  ));
