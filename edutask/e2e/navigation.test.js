import { test, expect } from '@playwright/test';

// This is end-to-end testing.

// test skeleton
test('should navigate to the dashboard page and locate Daily Tasks heading', async ({ page }) => {
  // Start from the home page
  await page.goto('http://localhost:3000');

  // Navigate to the dashboard 
  await page.click('text=dashboard');

  // The new URL should include "/dashboard"
  await expect(page).toHaveURL('http://localhost:3000/dashboard');

  // Check if the heading "Daily Tasks" exists on the page
  const dailyTasksHeading = await page.waitForSelector('h2:has-text("Daily Tasks")');
  expect(dailyTasksHeading).not.toBeNull("Daily Tasks heading is not found on the dashboard page");

  // Check if the heading "Daily Tasks" is visible on the page
  expect(await dailyTasksHeading.isVisible()).toBeTruthy("Daily Tasks heading is not visible on the dashboard page");
});



