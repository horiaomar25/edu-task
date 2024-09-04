import { test, expect } from '@playwright/test';

test.describe('Create Task Form', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the task page
        await page.goto('https://edu-task-horias-projects-dc29575b.vercel.app/tasks')
    })

    test('click on create task button to open form', async ({ page }) => {
        const createTaskButton = page.locator('[data-testid="create-task-button"]');
        const taskForm = page.locator('[data-testid="task-form"]')
        await createTaskButton.click({ waitNavigation: true });
        await expect(taskForm).toBeVisible();
    })

    test('click Add Task button with empty input fields to return error', async ({ page }) => {
        const createTaskButton = page.locator('[data-testid="create-task-button"]');
        const taskForm = page.locator('[data-testid="task-form"]');
        const addTaskButton = page.locator('[data-testid="add-task-button"]');

        // Open the task form
        await createTaskButton.click();
        await expect(taskForm).toBeVisible();

        await addTaskButton.click({ waitNavigation: true });

        page.on('dialog', async dialog => {
            expect(dialog.message()).toBe('Please fill in all fields');
            await dialog.dismiss();
        })
    })

    test('create a task successfully', async ({ page }) => {
        // Locate the create task button and click it
        const createTaskButton = page.locator('[data-testid="create-task-button"]');
        await createTaskButton.click({ waitNavigation: true });

        // Verify that the task form is visible
        const taskForm = page.locator('[data-testid="task-form"]');
        await expect(taskForm).toBeVisible();

        // Fill in the task details
        const taskName = page.locator('[data-testid="task-name-input"] input');
        await taskName.fill('Test task');

        const taskDescription = page.locator('[data-testid="task-description-input"] textarea').first();
        await taskDescription.fill('This is a test task');

        const taskDueDate = page.locator('[data-testid="task-due-date-input"] input');
        await taskDueDate.fill('2024-09-12');

        // Select task type from dropdown
        const taskTypeSelect = page.locator('[data-testid="task-type-select"] ');
        await taskTypeSelect.click();

        const dailyOption = page.getByRole('option', { name: 'Daily' });
        await dailyOption.click();

        // Click the add task button to submit the form
        const addTaskButton = page.locator('[data-testid="add-task-button"]');
        await addTaskButton.click({ waitNavigation: true });

        await expect(taskForm).not.toBeVisible();

        const taskCard = page.locator('[data-testid="task-card"]').first();
        await taskCard.waitFor({ state: 'visible' });
        await expect(taskCard).toBeVisible();  // Double-check that the task card is visible

        // Use getByRole to locate the heading and wait for it to be visible
        const taskCardHeading = page.getByRole('heading', { name: 'Test task' }).first();
        await taskCardHeading.waitFor({ state: 'visible', timeout: 60000 });
        await expect(taskCardHeading).toHaveText('Test task');  // Verifies the heading text


    });
})