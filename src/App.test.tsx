import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ContextProvider } from './Context';

test('renders "Fun with AI"', () => {
  render(<ContextProvider><App /></ContextProvider>);
  const linkElement = screen.getByText(/Fun with AI/i);
  expect(linkElement).toBeInTheDocument();
});
