import React from 'react';
import { storiesOf } from '@storybook/react';

import '../components/ValueShower/ValueShower';
import ValueShower from '../components/ValueShower/ValueShower';

storiesOf('ValueShower', module)
  .add('default', () => <ValueShower value={'value'}>Key</ValueShower>)
  .add('show stack', () => <ValueShower value={5}>Stack</ValueShower>)
  .add('bid shower', () => <ValueShower value={3}>Bid</ValueShower>);
