import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NumberSelector from '../components/NumberSelector/NumberSelector';

storiesOf('NumberSelector', module)
  .add('Default', () => (
    <NumberSelector min={0} max={5} number={0}></NumberSelector>
  ))
  .add('Arrows clickable', () => (
    <NumberSelector
      min={0}
      max={5}
      number={0}
      onDecrement={action('decrement_number')}
      onIncrement={action('increment_number')}
    ></NumberSelector>
  ));
