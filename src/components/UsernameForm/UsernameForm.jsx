import React from 'react';

import './UsernameForm.scss';

export default function UsernameForm({ onSubmit }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Enter a username</h2>
      <label htmlFor="usernameField">Username:</label>
      <input
        type="text"
        name="usernameField"
        id="usernameField"
        placeholder="Username"
      ></input>
      <button onClick={onSubmit}>Save</button>
    </form>
  );
}
