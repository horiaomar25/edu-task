import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from './TaskForm';
import useData from '../hooks/useData';

// Mock the useData hook
jest.mock('../Hooks/useData');

describe('TaskForm', () => {
  let createTaskMock;
  const handleCloseMock = jest.fn();

  beforeEach(() => {
    createTaskMock = jest.fn();
    useData.mockReturnValue({ createTask: createTaskMock });
  });

  test('renders correctly', () => {
    render(<TaskForm handleClose={handleCloseMock} />);

    expect(screen.getByTestId('task-form')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('task-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('task-description-input')).toBeInTheDocument();
    expect(screen.getByTestId('task-due-date-input')).toBeInTheDocument();
    expect(screen.getByTestId('task-type-select')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('initial form state is empty', () => {
    render(<TaskForm handleClose={handleCloseMock} />);

    expect(screen.getByTestId('task-name-input')).toHaveValue('');
    expect(screen.getByTestId('task-description-input')).toHaveValue('');
    expect(screen.getByTestId('task-due-date-input')).toHaveValue('');
    expect(screen.getByTestId('task-type-select')).toHaveValue('');
  });

  test('shows alert if form is submitted with empty fields', () => {
    render(<TaskForm handleClose={handleCloseMock} />);

    window.alert = jest.fn(); // Mock alert

    fireEvent.submit(screen.getByTestId('create-task-form'));

    expect(window.alert).toHaveBeenCalledWith('Please fill in all fields');
    expect(createTaskMock).not.toHaveBeenCalled();
  });

  test('submits form data correctly', async () => {
    render(<TaskForm handleClose={handleCloseMock} />);

    // Fill in the form
    fireEvent.change(screen.getByTestId('task-name-input'), { target: { value: 'Test Task' } });
    fireEvent.change(screen.getByTestId('task-description-input'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByTestId('task-due-date-input'), { target: { value: '2024-09-01' } });
    fireEvent.change(screen.getByTestId('task-type-select'), { target: { value: 'Daily' } });

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));

    // Check if createTask was called with the correct arguments
    expect(createTaskMock).toHaveBeenCalledWith({
      task_name: 'Test Task',
      task_description: 'Test Description',
      task_date: new Date('2024-09-01').toISOString(),
      task_type: 'Daily',
    });

    // Check if form fields are cleared after submission
    expect(screen.getByTestId('task-name-input')).toHaveValue('');
    expect(screen.getByTestId('task-description-input')).toHaveValue('');
    expect(screen.getByTestId('task-due-date-input')).toHaveValue('');
    expect(screen.getByTestId('task-type-select')).toHaveValue('');
  });

  test('closes form when close button is clicked', () => {
    render(<TaskForm handleClose={handleCloseMock} />);

    fireEvent.click(screen.getByTestId('close-button'));

    expect(handleCloseMock).toHaveBeenCalled();
  });
});
