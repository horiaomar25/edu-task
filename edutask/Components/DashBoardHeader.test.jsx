import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashBoardHeader from './DashBoardHeader';
import useData from '../Hooks/useData';

// Mock useData hook
jest.mock('../Hooks/useData');

const mockTasks = [
  { id: 1, task_name: 'Task 1' },
  { id: 2, task_name: 'Task 2' },
];

useData.mockReturnValue({ tasks: mockTasks });

describe('DashBoardHeader Component', () => {
  test('renders DashBoardHeader component', () => {
    render(<DashBoardHeader />);
    expect(screen.getByRole('section')).toBeInTheDocument();
  });

  test('displays the correct number of tasks', () => {
    render(<DashBoardHeader />);
    expect(screen.getByText(`Tasks: ${mockTasks.length}`)).toBeInTheDocument();
  });

  test('has correct styles applied', () => {
    render(<DashBoardHeader />);
    const section = screen.getByRole('section');
    expect(section).toHaveStyle({
      width: '90%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    });
  });
});