// BigTaskCard.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BigTaskCard from './BigTaskCard';

const mockTask = {
  task_name: 'Test Task',
  task_date: '2023-10-01T00:00:00Z',
  task_description: 'This is a test task description.',
};

const mockHandleClose = jest.fn();

describe('BigTaskCard Component', () => {
  test('renders the component with correct content', () => {
    render(<BigTaskCard task={mockTask} handleClose={mockHandleClose} />);
    
    // Check if the task name is rendered using getByRole
    expect(screen.getByRole('heading', { name: /Test Task/i })).toBeInTheDocument();
    
    // Check if the formatted date is rendered
    const formattedDate = new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric', month: 'short' }).format(new Date(mockTask.task_date));
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
    
    // Check if the task description is rendered
    expect(screen.getByText(/This is a test task description./i)).toBeInTheDocument();
  });

  test('calls handleClose when close button is clicked', () => {
    render(<BigTaskCard task={mockTask} handleClose={mockHandleClose} />);
    
    // Assuming there's a close button with a test ID 'close-button'
    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);
    
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  
});