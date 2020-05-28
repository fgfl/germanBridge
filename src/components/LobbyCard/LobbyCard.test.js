import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import LobbyCard from './LobbyCard';

afterEach(cleanup);

const lobby = (
  <LobbyCard
    lobbyTitle="Lobby title"
    lobbySize="4"
    totalPlayers="3"
    passwordRequired
  ></LobbyCard>
);

it('renders the lobby card', () => {
  const { getByText } = render(lobby);
  expect(getByText(/Lobby title/)).toBeInTheDocument();
});

it('shows password protected when a password is required', () => {
  const { getByText } = render(lobby);
  expect(getByText(/P\/W required/)).toBeInTheDocument();
});

it('shows player count and lobby size together as a string', () => {
  const lobbySize = '4';
  const playerCount = '2';
  const { getByText } = render(
    <LobbyCard
      lobbyTitle="Lobby title"
      lobbySize={lobbySize}
      totalPlayers={playerCount}
    ></LobbyCard>
  );
  expect(
    getByText(`${playerCount}/${lobbySize}`, { exact: false })
  ).toBeInTheDocument();
});

it('calls the join function once', () => {
  const lobbySize = '4';
  const playerCount = '2';
  const joinFn = jest.fn();

  const { getByText } = render(
    <LobbyCard
      lobbyTitle="Lobby title"
      lobbySize={lobbySize}
      totalPlayers={playerCount}
      onClickJoin={joinFn}
    ></LobbyCard>
  );

  const joinButton = getByText('Join');
  fireEvent.click(joinButton);

  expect(joinFn).toHaveBeenCalledTimes(1);
});
