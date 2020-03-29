import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '../components/Card';

const cardData = {
  number: 2,
  suit: 'clubs',
};

storiesOf('Card', module).add('2 clubs', () => (
  <Card cardData={cardData}></Card>
));
