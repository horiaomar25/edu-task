import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDownMenu from './DropMenu';



const mockTask = {
  id: 1,
  name: 'Test Task',
  description: 'Test Description',
  dueDate: '2023-10-10',
  type: 'Daily',
};

const mockTaskList = [mockTask];

describe('DropDownMenu Component', () => {
  const mockDelTask = jest.fn();
  const mockCompletedTask = jest.fn();

  beforeEach(() => {
    render(<DropDownMenu task={mockTask} taskList={mockTaskList} delTask={mockDelTask} completedTask={mockCompletedTask} />);
  });

  test('opens the menu when button is clicked to open dropdown menu', () => {
    // Find button by test-id 
    const moreOptionsButton = screen.getByTestId('more-options-button');

    // Click the button
    fireEvent.click(moreOptionsButton);

    // Check if the menu is open
    expect(screen.getByLabelText('basic-menu')).toBeInTheDocument();
  });

  test('opens the BigTaskCard component when open is clicked', async () => {
    const moreOptionsButton = screen.getByTestId('more-options-button');
    fireEvent.click(moreOptionsButton);

    const openButton = screen.getByTestId('menu-item-open');
    fireEvent.click(openButton);

    // Use waitFor to handle asynchronous rendering
    await waitFor(() => {
      const modal = screen.getByTestId('big-task-modal');
      expect(modal).toBeInTheDocument();

      // Check if BigTaskCard is within the modal
      const bigTaskCard = within(modal).getByTestId('big-task-card');
      expect(bigTaskCard).toBeInTheDocument();
    });
  });

  test('Checks that DropDownMenu open and closes correctly', async () => {
    // Open the menu
    fireEvent.click(screen.getByTestId('more-options-button'));

    // Check if the menu is open
    // Check if the menu is open
    const menu = screen.getByLabelText('basic-menu');
    expect(menu).toBeInTheDocument();

      // Close the menu by clicking the close menu item
      const closeButton = screen.getByTestId('menu-item-close');
      fireEvent.click(closeButton);

    // Use waitFor to handle asynchronous rendering
    await waitFor(() => {
      expect(menu).not.toBeInTheDocument();
    });
  });

  test('deletes the task when delete is clicked', async () => {
    const openButton = screen.getByTestId('more-options-button');
    fireEvent.click(openButton);

    const delButton = screen.getByTestId('menu-item-delete');
    fireEvent.click(delButton);

    expect(mockDelTask).toHaveBeenCalledWith(mockTask.id);

  })

  test('opens the edit task modal when edit is clicked', async () => {
  // Simulate the action to open the modal
  const openButton = screen.getByTestId('more-options-button');
  fireEvent.click(openButton);

  const editButton = screen.getByTestId('menu-item-edit');
  fireEvent.click(editButton);

  // Wait for the modal to appear
  await waitFor(() => {
    expect(screen.getByTestId('edit-form-modal')).toBeInTheDocument();
  });

  // Check if the EditForm component is rendered
  expect(screen.getByTestId('edit-form-component')).toBeInTheDocument();

  // Simulate closing the modal
  const closeButton = screen.getByTestId('close-button');
  fireEvent.click(closeButton);

  // Wait for the modal to disappear
  await waitFor(() => {
    expect(screen.queryByTestId('edit-form-modal')).not.toBeInTheDocument();
  });
  });

  test('completes the task when complete is clicked', async () => { 
    // Simulate the action to open the menu 
    const openMenu = screen.getByTestId('more-options-button');
    fireEvent.click(openMenu);

    // Simulate the action to complete the task
    const completeButton = screen.getByTestId('menu-item-complete');
    fireEvent.click(completeButton);

    // Check if the task is completed
    expect(mockCompletedTask).toHaveBeenCalledWith(mockTask.id);
    expect(screen.getByRole('alert')).toBeInTheDocument();


  })
});