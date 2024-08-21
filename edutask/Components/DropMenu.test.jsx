import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DropDownMenu from './DropMenu';
import '@testing-library/jest-dom';
import EditForm from './EditForm';

describe('DropDownMenu Component', () => {
  const mockTask = { id: 1, name: 'Test Task' };
  const mockTaskList = jest.fn();
  const mockDelTask = jest.fn();
  const mockCompletedTask = jest.fn();

  beforeEach(() => {
    render(<DropDownMenu task={mockTask} taskList={mockTaskList} delTask={mockDelTask} completedTask={mockCompletedTask} />);
  });

  test('opens the menu when MoreVertIcon is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const menu = screen.getByRole('menu');
      expect(menu).toBeInTheDocument();
    });
  });

  test('triggers handleOpenExpand when "Open" MenuItem is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const openMenuItem = screen.getByTestId('menu-item-open');
      expect(openMenuItem).toBeInTheDocument();
      fireEvent.click(openMenuItem);
    });

    await waitFor(() => {
      const bigTaskCard = screen.getByTestId('big-task-card');
      expect(bigTaskCard).toBeInTheDocument();
    });
  });

  test('triggers handleOpen when "Edit" MenuItem is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const editMenuItem = screen.getByTestId('menu-item-edit');
      expect(editMenuItem).toBeInTheDocument();
      fireEvent.click(editMenuItem);
    });

    render(<EditForm task={mockTask} taskList={mockTaskList} />);

    await waitFor(() => {
      const editForm = screen.getByTestId('edit-form');
      expect(editForm).toBeInTheDocument();
    });
  });

  test('triggers handleDelete when "Delete" MenuItem is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const deleteMenuItem = screen.getByText('Delete');
      expect(deleteMenuItem).toBeInTheDocument();
      fireEvent.click(deleteMenuItem);
    });

    expect(mockDelTask).toHaveBeenCalledWith(mockTask.id);
  });

  test('triggers handleTaskComplete when "Complete" MenuItem is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const completeMenuItem = screen.getByText('Complete');
      expect(completeMenuItem).toBeInTheDocument();
      fireEvent.click(completeMenuItem);
    });

    expect(mockCompletedTask).toHaveBeenCalledWith(mockTask.id);

    await waitFor(() => {
      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
    });
  });

  test('closes the menu when Close button is clicked', async () => {
    const moreVertButton = screen.getByTestId('more-options-icon');
    fireEvent.click(moreVertButton);

    await waitFor(() => {
      const closeButton = screen.getByText('Close');
      expect(closeButton).toBeInTheDocument();
      fireEvent.click(closeButton);
    });

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });
});