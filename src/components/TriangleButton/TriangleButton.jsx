import React from 'react';

import classNames from 'classnames';

import './TriangleButton.scss';

export default function TriangleButton({
  up,
  down,
  left,
  right,
  onClick,
  disabled,
}) {
  const btnClass = classNames('triangle-button', {
    'triangle-up': up,
    'triangle-down': down,
    'triangle-left': left,
    'triangle-right': right,
  });
  return (
    <button className={btnClass} disabled={disabled} onClick={onClick}></button>
  );
}
