import { test, expect } from '@playwright/test';

test("open task card", async ({ page }) => {

    //Navigate to tasks page
    await page.goto("http://localhost:3000/");

    // Wait for the button to become visible
    const buttonSelector = 'button:has-text("Tasks")';
    await page.waitForSelector(buttonSelector, {timeout: 60000});

    // Click the button to go to tasks page

})