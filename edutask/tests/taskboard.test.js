import { test, expect } from '@playwright/test';


test.describe('TaskBoard Component', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where TaskBoard is rendered
    await page.goto('http://localhost:3000/tasks'); // Adjust the URL as needed
  });

 
});