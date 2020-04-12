import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TriangleButton from '../components/TriangleButton/TriangleButton';

storiesOf('TriangleButton', module)
  .add('Up', () => <TriangleButton up></TriangleButton>)
  .add('Down', () => <TriangleButton down></TriangleButton>)
  .add('Left', () => <TriangleButton left></TriangleButton>)
  .add('Right', () => <TriangleButton right></TriangleButton>)
  .add('Clickable', () => (
    <TriangleButton up onClick={action('button-clicked')}></TriangleButton>
  ))
  .add('Disabled', () => <TriangleButton up disabled></TriangleButton>);
