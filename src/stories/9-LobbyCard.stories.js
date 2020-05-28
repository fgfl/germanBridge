import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LobbyCard from '../components/LobbyCard/LobbyCard';

storiesOf('LobbyCard')
  .add('default', () => (
    <LobbyCard
      lobbyTitle="A test lobby"
      lobbySize="4"
      totalPlayers="3"
    ></LobbyCard>
  ))
  .add('password protected', () => (
    <LobbyCard
      lobbyTitle="You need a password"
      lobbySize="4"
      totalPlayers="3"
      passwordRequired
    ></LobbyCard>
  ))
  .add('join button clickable', () => (
    <LobbyCard
      lobbyTitle="You need a password"
      lobbySize="4"
      totalPlayers="3"
      passwordRequired
      onClickJoin={action('Join clicked')}
    ></LobbyCard>
  ));
