import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TriangleButton from '../components/TriangleButton/TriangleButton';

storiesOf('TriangleButton', module)
  .add('Up', () => (
    <TriangleButton up onClick={action('button-clicked')}></TriangleButton>
  ))
  .add('Down', () => (
    <TriangleButton down onClick={action('button-clicked')}></TriangleButton>
  ))
  .add('Left', () => (
    <TriangleButton left onClick={action('button-clicked')}></TriangleButton>
  ))
  .add('Right', () => (
    <TriangleButton right onClick={action('button-clicked')}></TriangleButton>
  ));
