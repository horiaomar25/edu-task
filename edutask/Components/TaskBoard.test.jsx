import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
    expect(screen.getAllByTestId('skeleton')).toHaveLength(3); // 3 skeletons for 3 task categories
  });

  test('renders daily tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByTestId('daily-task')).toBeInTheDocument();
    expect(screen.getByText('Daily Task 1')).toBeInTheDocument();
  });

  test('renders weekly tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByTestId('weekly-task')).toBeInTheDocument();
    expect(screen.getByText('Weekly Task 1')).toBeInTheDocument();
  });

  test('renders completed tasks', () => {
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={jest.fn()} isLoading={false} />);
    expect(screen.getByTestId('completed-task')).toBeInTheDocument();
    expect(screen.getByText('Completed Task 1')).toBeInTheDocument();
  });

  test('calls delTask when delete button is clicked', () => {
    const delTaskMock = jest.fn();
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={delTaskMock} completeTask={jest.fn()} isLoading={false} />);
    const openMenuButton = screen.getByTestId('more-options-button');
    // Assuming that 'Delete' button is within a DropMenu in TaskCard
    fireEvent.click(screen.getByText('Delete'));
    expect(delTaskMock).toHaveBeenCalledWith(1); // Check if the delete function is called with the correct ID
  });

  test('calls completeTask when complete button is clicked', async () => {
    const completeTaskMock = jest.fn();
    render(<TaskBoard tasks={mockTasks} taskList={[]} delTask={jest.fn()} completeTask={completeTaskMock} isLoading={false} />);

    // Click the button to open DropMenu
    const openMenuButton = await screen.findByTestId('more-options-button', { name: /Daily/i });
    fireEvent.click(openMenuButton);
    

    expect(completeTaskMock).toHaveBeenCalledWith(1); // Check if the complete function is called with the correct ID
  });
});
