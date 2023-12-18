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



// Test on the form - to open form
test('should navigate to the form page and locate the form', async ({ page }) => {
  // start from the home page
  await page.goto('http://localhost:3000/tasks');

  // navigate to the form 
  await page.click('text=create a task');

  // the new URL should include "/form"
  await expect(page).toHaveURL('http://localhost:3000/form');

  // Check if the heading "Daily Tasks" exists on the page
  const formElement =  await page.locator('//form');
 
  // Check if the heading "Daily Tasks" is visible on the page
    expect(await formElement.isVisible()).toBeTruthy();
});