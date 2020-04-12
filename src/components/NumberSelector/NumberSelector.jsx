import React, { useState } from 'react';

export default function NumberSelector() {
  const [number, setNumber] = useState(0);
  return <p>{number}</p>;
}
