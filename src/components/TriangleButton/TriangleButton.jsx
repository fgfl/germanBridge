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

  const getAriaLabelText = (up, down, left, right) => {
    if (up) return 'upButton';
    if (down) return 'downButton';
    if (left) return 'leftButton';
    if (right) return 'rightButton';
  };

  return (
    <button
      aria-label={getAriaLabelText(up, down, left, right)}
      className={btnClass}
      disabled={disabled}
      onClick={onClick}
    ></button>
  );
}
