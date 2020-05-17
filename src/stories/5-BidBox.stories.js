import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BidBox from '../components/BidBox/BidBox';

storiesOf('BidBox', module)
  .add('Default', () => <BidBox roundNumber={5}></BidBox>)
  .add('Submit clickable', () => (
    <BidBox submitBid={action('submit_bid')} roundNumber={4}></BidBox>
  ));
