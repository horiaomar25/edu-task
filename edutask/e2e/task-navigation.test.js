import { test, expect } from "@playwright/test";

test("click see more button to go to tasks page", async ({ page }) => {
  // Navigate to the page where the button is located
  await page.goto("http://localhost:3000/dashboard");

  // Wait for the button to become visible
  const buttonSelector = 'button:has-text("See More")';
  await page.waitForSelector(buttonSelector, { timeout: 60000 });

  // Click the button to go to task page
  await page.click(buttonSelector);

  // Wait for navigation to the /tasks page
  await expect(page).toHaveURL('http://localhost:3000/tasks')

 
});