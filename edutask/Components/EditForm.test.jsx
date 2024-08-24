import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EditForm from './EditForm';
import { useData } from './useData';

// Mock useData hook
jest.mock('./useData');

const mockTask = {
  id: 1,
  task_name: 'Test Task',
  task_description: 'Test Description',
  task_date: '2023-10-10',
  task_type: 'Test Type',
};
const mockHandleClose = jest.fn();
const mockOnTaskUpdate = jest.fn();

describe('EditForm Component', () => {
  beforeEach(() => {
    // Mock implementation of updateTask
    useData.mockReturnValue({
      updateTask: jest.fn((id, updatedTask) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Task with id ${id} updated to:`, updatedTask);
            resolve();
          }, 1000);
        });
      }),
    });

    render(
      <EditForm
        task={mockTask}
        handleClose={mockHandleClose}
        onTaskUpdate={mockOnTaskUpdate}
      />
    );
  });

  test('renders EditForm component', () => {
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('initializes state correctly', () => {
    const nameInput = screen.getByLabelText(/task name/i);
    const descriptionInput = screen.getByLabelText(/task description/i);
    const dateInput = screen.getByLabelText(/task due date/i);
    const typeInput = screen.getByLabelText(/task type/i);

    expect(nameInput.value).toBe(mockTask.task_name);
    expect(descriptionInput.value).toBe(mockTask.task_description);
    expect(dateInput.value).toBe(mockTask.task_date);
    expect(typeInput.value).toBe(mockTask.task_type);
  });

  test('updates state on input change', () => {
    const nameInput = screen.getByLabelText(/task name/i);
    fireEvent.change(nameInput, { target: { value: 'Updated Task Name' } });
    expect(nameInput.value).toBe('Updated Task Name');

    const descriptionInput = screen.getByLabelText(/task description/i);
    fireEvent.change(descriptionInput, { target: { value: 'Updated Task Description' } });
    expect(descriptionInput.value).toBe('Updated Task Description');

    const dateInput = screen.getByLabelText(/task due date/i);
    fireEvent.change(dateInput, { target: { value: '2023-11-11' } });
    expect(dateInput.value).toBe('2023-11-11');

    const typeInput = screen.getByLabelText(/task type/i);
    fireEvent.change(typeInput, { target: { value: 'Updated Task Type' } });
    expect(typeInput.value).toBe('Updated Task Type');
  });

  test('calls updateTask function and resolves correctly', async () => {
    const { updateTask } = useData();

    const nameInput = screen.getByLabelText(/task name/i);
    fireEvent.change(nameInput, { target: { value: 'Updated Task Name' } });

    const submitButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(updateTask).toHaveBeenCalledWith(mockTask.id, {
        ...mockTask,
        task_name: 'Updated Task Name',
      });
    });

    await waitFor(() => {
      expect(mockOnTaskUpdate).toHaveBeenCalledWith({
        ...mockTask,
        task_name: 'Updated Task Name',
      });
    });
  });
});