import React from 'react';
import { storiesOf } from '@storybook/react';

import UsernameForm from '../components/UsernameForm/UsernameForm';

storiesOf('UsernameForm', module).add('default', () => (
  <UsernameForm></UsernameForm>
));
