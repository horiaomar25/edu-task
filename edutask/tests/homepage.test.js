import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the homepage before each test
        await page.goto('http://localhost:3000/');
    });

    test('should display correct heading', async ({ page }) => {
        // Verify the main heading on the homepage
        await expect(page.locator('h1')).toHaveText('EduTask');
    });

    test('should display dashboard button', async ({ page }) => {
        // Verify the Dashboard button is visible
        const dashboardButton = page.locator('button[data-testid="dashboard-button"]');
        await dashboardButton.waitFor({ state: 'visible' });
        await expect(dashboardButton).toBeVisible();
    });

    test('should display task button', async ({ page }) => {
        // Verify the Tasks button is visible
        const taskButton = page.locator('button[data-testid="tasks-button"]');
        await taskButton.waitFor({ state: 'visible' });
        await expect(taskButton).toBeVisible();
    });

    test('dashboard button should navigate to dashboard page', async ({ page }) => {
        // Click the Dashboard button and verify navigation
        const dashboardButton = page.locator('button[data-testid="dashboard-button"]');
        await dashboardButton.click();
        await page.waitForNavigation(); // Wait for navigation to complete
        await expect(page.locator('button[data-testid="see-more-button"]')).toBeVisible(); // Replace with actual locator on the dashboard page
    });

    test('task button should navigate to task page', async ({ page }) => {
        // Click the Tasks button and verify navigation
        const taskButton = page.locator('button[data-testid="tasks-button"]');
        await taskButton.click();
        await page.waitForNavigation(); // Wait for navigation to complete
        expect(page.url()).toBe('http://localhost:3000/tasks');
    });
});
