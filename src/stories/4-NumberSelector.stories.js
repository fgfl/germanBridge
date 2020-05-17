import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NumberSelector from '../components/NumberSelector/NumberSelector';

storiesOf('NumberSelector', module)
  .add('Min number', () => (
    <NumberSelector min={0} max={5} number={0}></NumberSelector>
  ))
  .add('Max number', () => (
    <NumberSelector min={0} max={5} number={5}></NumberSelector>
  ))
  .add('Arrows clickable', () => (
    <NumberSelector
      min={0}
      max={5}
      number={1}
      onDecrement={action('decrement_number')}
      onIncrement={action('increment_number')}
    ></NumberSelector>
  ));
