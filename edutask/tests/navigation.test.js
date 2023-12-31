import { test, expect } from '@playwright/test';

// test skeleton
test('should navigate to the dashboard page and locate Daily Tasks heading', async ({ page }) => {
  // start from the home page
  await page.goto('http://localhost:3000');

  // navigate to the dashboard 
  await page.click('text=dashboard');

  // the new URL should include "/dashboard"
  await expect(page).toHaveURL('http://localhost:3000/dashboard');

  // Check if the heading "Daily Tasks" exists on the page
  const h2Element =  await page.locator('//h2[contains(text(), "Daily Tasks")]');
 
  // Check if the heading "Daily Tasks" is visible on the page
    expect(await h2Element.isVisible()).toBeTruthy();
});



