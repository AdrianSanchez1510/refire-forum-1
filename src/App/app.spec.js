import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App'; // Adjust the path based on your file structure

describe('App Component', () => {
  const defaultProps = {
    siteName: "refire",
    loading: false,
    user: {},
    authenticatedUser: {},
    board: {},
    boardKey: "board1",
    threadKey: "thread1",
    children: <div>Test Child Component</div>,
    styles: {},
    theme: {
      UserSettings: {},
      TopBar: {},
      Footer: {}
    }
  };

  test('renders loading spinner when loading is true', () => {
    render(<App {...defaultProps} loading={true} />);
    
    // Expect the loading spinner to be in the document
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('toggles user settings visibility', () => {
    render(<App {...defaultProps} />);

    // Initially, user settings should not be visible
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Click the toggle settings button in TopBar
    const toggleButton = screen.getByRole('button', { name: /settings/i });
    fireEvent.click(toggleButton);

    // Now, user settings should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Click the toggle settings button again
    fireEvent.click(toggleButton);

    // Now, user settings should not be visible
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
