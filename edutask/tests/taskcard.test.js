import { test, expect } from '@playwright/test';

test.describe('TaskCard Component', () => {
  test.beforeEach(async ({ page }) => {
    
    // Navigate to the homepage before each test
    await page.goto('https://edu-task-horias-projects-dc29575b.vercel.app/tasks');
  });

  test('open a task card', async ({ page }) => {
    test.slow();
    // Locate the task card that contains "Snack TimeCollect fruits from the hall"
    const taskCard = page.locator('[data-testid="task-card"]').filter({ hasText: 'Snack TimeCollect fruits from the hall' });

    // Ensure the task card is visible
    await expect(taskCard).toBeVisible();

    // Locate the "More Options" button within the task card and click it
    const openTaskMenu = taskCard.locator('[data-testid="more-options-button"]');

    await openTaskMenu.click();

    // Locate and click the "Open" option in the dropdown menu
    const openTaskCard = page.locator('[data-testid="open-taskcard"]');
    await openTaskCard.waitFor({ state: 'visible' });
    await openTaskCard.click();

    // Wait for the big task card to appear after clicking the "Open" button
    const bigTaskCard = page.locator('[data-testid="big-task-card"]');

    // Add an explicit wait for the big task card to be visible
    await bigTaskCard.waitFor({ state: 'visible' });

    // Assert that the big task card is visible
    await expect(bigTaskCard).toBeVisible();
  });
});
