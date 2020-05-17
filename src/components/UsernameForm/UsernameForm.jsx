import React from 'react';

export default function UsernameForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Enter a username</h2>
      <label for="id-username">Username:</label>
      <input type="text" id="id-username"></input>
      <button onClick={(e) => e.preventDefault()}>Save</button>
    </form>
  );
}
