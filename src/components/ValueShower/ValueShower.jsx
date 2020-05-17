import React from 'react';

export default function ValueShower({ children, value }) {
  return (
    <p>
      {children}: {value}
    </p>
  );
}
