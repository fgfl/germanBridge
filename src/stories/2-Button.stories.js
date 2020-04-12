import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button/Button';

storiesOf('Button', module)
  .add('Default', () => <Button>Default</Button>)
  .add('Clickable', () => (
    <Button onClick={action('button clicked')}>Clickable</Button>
  ))
  .add('Disabled', () => <Button disabled={true}>Disabled</Button>);
