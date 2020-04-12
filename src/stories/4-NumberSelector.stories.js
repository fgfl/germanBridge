import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NumberSelector from '../components/NumberSelector/NumberSelector';

storiesOf('NumberSelector', module).add('Min=0 Max=5', () => (
  <NumberSelector min={0} max={5}></NumberSelector>
));
