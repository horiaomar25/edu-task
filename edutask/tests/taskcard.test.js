import { test, expect } from '@playwright/test';


test.describe('TaskCard Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where TaskBoard is rendered
    await page.goto('http://localhost:3000/tasks'); // Adjust the URL as needed
  });

  test('create a task and mark it as complete', async ({page}) => {
    const openTaskCardMenu = page.locator('{data-testid="more-options-button"');
    
  })

 
});