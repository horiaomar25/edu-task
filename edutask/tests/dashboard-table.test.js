import { test, expect } from '@playwright/test';

test.describe('DashBoardTable Component', () => {
    // Mock tasks for testing
    const mockTasks = [
        { id: '1', task_name: 'Task 1', task_type: 'Daily', completed: false },
        { id: '2', task_name: 'Task 2', task_type: 'Weekly', completed: false },
        { id: '3', task_name: 'Task 3', task_type: 'Daily', completed: false },
        { id: '4', task_name: 'Task 4', task_type: 'Weekly', completed: false },
        // Add more tasks if needed
    ];

    test.beforeEach(async ({ page }) => {
        // Serve a page that includes your component with mock data
        await page.goto('http://localhost:3000/dashboard'); // Adjust the URL as needed
    });

    test('should render the table with tasks', async ({ page }) => {
        await expect(page.locator('[data-testid="dashboard-table"]')).toBeVisible();

        for (const task of mockTasks.slice(0, 4)) {
            await expect(page.locator(`text=${task.task_name}`)).toBeVisible();
            await expect(page.locator(`text=${task.task_type}`)).toBeVisible();
        }
    });

    test('should hide completed tasks and show alert', async ({ page }) => {
        // Click the checkbox for the first task
        await page.locator('text=Task 1').locator('..').locator('input[type="checkbox"]').click();

        // Verify that the task row is hidden
        await expect(page.locator('text=Task 1')).not.toBeVisible();

        // Check the alert visibility
        const alert = page.locator('text=Completed');
        await expect(alert).toBeVisible();

        // Optionally wait for the alert to disappear
        await page.waitForTimeout(5000); // Wait for alert timeout
        await expect(alert).not.toBeVisible();
    });

    test('should display tasks with correct style based on type', async ({ page }) => {
        for (const task of mockTasks.slice(0, 4)) {
            const chip = page.locator(`text=${task.task_type}`);
            const style = await chip.evaluate(el => getComputedStyle(el));

            const expectedColor = task.task_type === 'Daily' ? 'blue' : 'green';
            expect(style.borderColor).toBe(expectedColor);
            expect(style.color).toBe(expectedColor);
        }
    });

    test('should animate tasks on complete', async ({ page }) => {
        // Check the initial visibility of task rows
        for (const task of mockTasks.slice(0, 4)) {
            await expect(page.locator(`text=${task.task_name}`)).toBeVisible();
        }

        // Click the checkbox for a task to complete it
        await page.locator('text=Task 1').locator('..').locator('input[type="checkbox"]').click();

        // Wait for the Slide animation to complete (adjust timeout if necessary)
        await page.waitForTimeout(1000);

        // Verify that the task row is hidden
        await expect(page.locator('text=Task 1')).not.toBeVisible();
    });
});
