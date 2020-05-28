import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import UsernameForm from './UsernameForm';

afterEach(cleanup);

it('renders the form', () => {
  const { getByText } = render(<UsernameForm></UsernameForm>);

  expect(getByText('Enter a username')).toBeInTheDocument();
});

it('allows you to enter a username', () => {
  const { getByPlaceholderText } = render(<UsernameForm></UsernameForm>);

  const inputField = getByPlaceholderText('Username');
  fireEvent.change(inputField, { target: { value: 'test' } });

  expect(inputField.value).toBe('test');
});

it('calls the saveUsername function', () => {
  const saveFn = jest.fn();
  const { getByText } = render(<UsernameForm onSubmit={saveFn}></UsernameForm>);

  fireEvent.click(getByText('Save'));
  expect(saveFn).toHaveBeenCalledTimes(1);
});
