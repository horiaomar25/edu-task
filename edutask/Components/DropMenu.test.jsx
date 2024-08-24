import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropMenu from './DropMenu';

const mockTask = { id: 1, name: 'Test Task' };
const mockTaskList = jest.fn();
const mockDelTask = jest.fn();
const mockCompletedTask = jest.fn();

describe('DropMenu Component', () => {
  beforeEach(() => {
    render(
      <DropMenu
        task={mockTask}
        taskList={mockTaskList}
        delTask={mockDelTask}
        completedTask={mockCompletedTask}
      />
    );
  });

  test('renders more options button', () => {
    const button = screen.getByTestId('more-options-button');
    expect(button).toBeInTheDocument();
  });

  test('opens menu on button click', () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const menu = screen.getByRole('menu', { name: 'task-menu' });
    expect(menu).toBeInTheDocument();
  });

  test('opens edit modal on edit menu item click', () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const editMenuItem = screen.getByTestId('menu-item-edit');
    fireEvent.click(editMenuItem);
    const modal = screen.getByTestId('edit-form-modal');
    expect(modal).toBeInTheDocument();
  });

  test('calls delTask on delete menu item click', () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const deleteMenuItem = screen.getByTestId('menu-item-delete');
    fireEvent.click(deleteMenuItem);
    expect(mockDelTask).toHaveBeenCalledWith(mockTask.id);
  });

  test('calls completedTask and shows alert on complete menu item click', async () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const completeMenuItem = screen.getByTestId('menu-item-complete');
    fireEvent.click(completeMenuItem);
    expect(mockCompletedTask).toHaveBeenCalledWith(mockTask.id);
    const alert = await waitFor(() => screen.getByTestId('completion-alert'));
    expect(alert).toBeInTheDocument();
  });

  test('opens big task card modal on open menu item click', () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const openMenuItem = screen.getByTestId('menu-item-open');
    fireEvent.click(openMenuItem);
    const modal = screen.getByTestId('big-task-modal');
    expect(modal).toBeInTheDocument();
  });

  test('closes menu on close menu item click', () => {
    const button = screen.getByTestId('more-options-button');
    fireEvent.click(button);
    const closeMenuItem = screen.getByTestId('menu-item-close');
    fireEvent.click(closeMenuItem);
    const menu = screen.queryByRole('menu', { name: 'task-menu' });
    expect(menu).not.toBeInTheDocument();
  });
});