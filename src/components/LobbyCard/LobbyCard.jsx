import React from 'react';
import classNames from 'classnames';

import ValueShower from '../ValueShower/ValueShower';
import './LobbyCard.scss';

export default function LobbyCard({
  lobbyTitle,
  lobbySize,
  totalPlayers,
  passwordRequired,
  onClickJoin,
}) {
  const lobbyCardClass = classNames('lobby-card');

  return (
    <div className={lobbyCardClass}>
      <h2>{lobbyTitle}</h2>
      {passwordRequired && <p>P/W required</p>}
      <ValueShower value={`${totalPlayers}/${lobbySize}`}>Players</ValueShower>
      <button onClick={onClickJoin}>Join</button>
    </div>
  );
}
