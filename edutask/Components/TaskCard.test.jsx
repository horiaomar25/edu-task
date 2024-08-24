import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskCard from './TaskCard';
import DropDownMenu from './DropMenu';

jest.mock('./DropMenu', () => jest.fn(() => <div data-testid="dropdown-menu"></div>));

const mockTask = {
  id: 1,
  task_date: '2023-10-10T00:00:00Z',
  name: 'Test Task'
};
const mockDelTask = jest.fn();
const mockCompletedTask = jest.fn();

describe('TaskCard Component', () => {
  beforeEach(() => {
    render(
      <TaskCard
        task={mockTask}
        delTask={mockDelTask}
        completedTask={mockCompletedTask}
      />
    );
  });

  test('renders TaskCard component', () => {
    const cardContent = screen.getByText('Test Task');
    expect(cardContent).toBeInTheDocument();
  });

  test('displays formatted date correctly', () => {
    const date = screen.getByText('Tue, 10 Oct');
    expect(date).toBeInTheDocument();
  });

  test('renders DropDownMenu component with correct props', () => {
    expect(DropDownMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        task: mockTask,
        delTask: mockDelTask,
        completedTask: mockCompletedTask
      }),
      {}
    );
    const dropdownMenu = screen.getByTestId('dropdown-menu');
    expect(dropdownMenu).toBeInTheDocument();
  });
});