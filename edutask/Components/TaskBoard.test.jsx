import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskBoard from './TaskBoard';
import '@testing-library/jest-dom/';

const mockTasks = [
  { id: 1, task_type: 'Daily', completed: false, name: 'Daily Task 1' },
  { id: 2, task_type: 'Weekly', completed: false, name: 'Weekly Task 1' },
  { id: 3, task_type: 'Daily', completed: true, name: 'Completed Task 1' },
];

describe('TaskBoard Component', () => {
  test('renders loading skeletons when loading', () => {
    render(<TaskBoard tasks={[]} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={true} />);
    expect(screen.getAllByRole('progressbar')).toHaveLength(3); // Assuming there are 3 skeletons
  });

  test('renders daily tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByText('Daily Task 1')).toBeInTheDocument();
  });

  test('renders weekly tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByText('Weekly Task 1')).toBeInTheDocument();
  });

  test('renders completed tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByText('Completed Task 1')).toBeInTheDocument();
  });

  test('calls delTask when delete button is clicked', () => {
    const delTaskMock = jest.fn();
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={delTaskMock} completeTask={jest.fn()} isLoading={false} />);
    // Assuming TaskCard has a button with text 'Delete'
    screen.getByText('Delete').click();
    expect(delTaskMock).toHaveBeenCalled();
  });

  test('calls completeTask when complete button is clicked', () => {
    const completeTaskMock = jest.fn();
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={completeTaskMock} isLoading={false} />);
    // Assuming TaskCard has a button with text 'Complete'
    screen.getByText('Complete').click();
    expect(completeTaskMock).toHaveBeenCalled();
  });
});