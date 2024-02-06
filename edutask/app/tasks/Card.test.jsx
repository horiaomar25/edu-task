import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TaskCard from './TaskCard'; // Assuming this test file is in the same directory as TaskCard.js

// ... (Mock props and describe block)

describe('TaskCard component', () => {
  test('opens DropDownMenu and reads an element', async () => {
    // Render the TaskCard component with mock props
    const { getByTestId, getByLabelText } = render(
      <TaskCard
        task={mockTask}
        taskList={mockTaskList}
        delTask={mockDelTask}
        completedTask={mockCompletedTask}
      />
    );

    // Find and trigger the click on the icon or element (replace 'dropdown-icon' with your test ID or other attribute)
    const dropDownIcon = getByTestId('dropdown-icon'); // Assuming you have a test ID set for the icon
    fireEvent.click(dropDownIcon);

    // Wait for the DropDownMenu to open (you might need additional wait conditions based on animations or async behavior)
    await waitFor(() => getByTestId('menu-element')); // Replace 'menu-element' with the element you want to assert within the menu

    // Assert the presence of an element within the DropDownMenu
    const menuElement = getByTestId('menu-element');
    expect(menuElement).toBeInTheDocument();

    // Perform other assertions or actions based on the menu element
    // ...
  });
});
