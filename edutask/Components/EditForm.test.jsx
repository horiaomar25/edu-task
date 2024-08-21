import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditForm from './EditForm';

test('renders EditForm and handles close button click', () => {
  const handleClose = jest.fn();

  render(<EditForm handleClose={handleClose} />);

  // Check if the form is rendered
  expect(screen.getByTestId('edit-form')).toBeInTheDocument();

  // Simulate clicking the close button
  fireEvent.click(screen.getByText('Close'));

  // Check if handleClose was called
  expect(handleClose).toHaveBeenCalledTimes(1);
});