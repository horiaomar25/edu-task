import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardGrid from './DashboardGrid';
import DashBoardTable from './DashBoardTable';
import Calendar from './Calendar';
import DashBoardHeader from './DashBoardHeader';

// Mock child components
jest.mock('./DashBoardTable', () => () => <div data-testid="dashboard-table" />);
jest.mock('./Calendar', () => () => <div data-testid="calendar" />);
jest.mock('./DashBoardHeader', () => () => <div data-testid="dashboard-header" />);

const mockTasks = [
  { id: 1, task_name: 'Task 1', task_type: 'Daily', completed: true },
  { id: 2, task_name: 'Task 2', task_type: 'Weekly', completed: false },
  { id: 3, task_name: 'Task 3', task_type: 'Daily', completed: true },
  { id: 4, task_name: 'Task 4', task_type: 'Weekly', completed: false },
  { id: 5, task_name: 'Task 5', task_type: 'Daily', completed: false },
  { id: 6, task_name: 'Task 6', task_type: 'Weekly', completed: true },
];

describe('DashboardGrid Component', () => {
  test('renders DashboardGrid component', () => {
    render(<DashboardGrid tasks={mockTasks} isLoading={false} />);
    expect(screen.getByTestId('dashboard-header')).toBeInTheDocument();
    expect(screen.getByTestId('dashboard-table')).toBeInTheDocument();
    expect(screen.getByTestId('calendar')).toBeInTheDocument();
  });

  test('displays loading skeletons when isLoading is true', () => {
    render(<DashboardGrid tasks={mockTasks} isLoading={true} />);
    expect(screen.getAllByTestId('skeleton')).toHaveLength(3);
  });

  test('filters and displays daily and weekly tasks', () => {
    render(<DashboardGrid tasks={mockTasks} isLoading={false} />);
    const dailyTasks = mockTasks.filter(task => task.task_type === 'Daily').slice(0, 3);
    const weeklyTasks = mockTasks.filter(task => task.task_type === 'Weekly').slice(0, 3);

    dailyTasks.forEach(task => {
      expect(screen.getByText(task.task_name)).toBeInTheDocument();
    });

    weeklyTasks.forEach(task => {
      expect(screen.getByText(task.task_name)).toBeInTheDocument();
    });
  });

  test('updates completed tasks state', () => {
    render(<DashboardGrid tasks={mockTasks} isLoading={false} />);
    const completedTasks = mockTasks.filter(task => task.completed).map(task => task.id);

    completedTasks.forEach(taskId => {
      expect(screen.getByTestId(`completed-task-${taskId}`)).toBeInTheDocument();
    });
  });
});