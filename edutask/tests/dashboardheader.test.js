import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => { 
    test.beforeEach(async ({ page }) => {
        // Navigate to the homepage before each test
        await page.goto('http://localhost:3000/dashboard');
    });

    test('should display loading state', async ({ page }) => {
        // Verify the loading state is displayed
        const loadingText = page.getByRole('heading', { name: 'Loading...' });
        await loadingText.waitFor({ state: 'visible' });
        await expect(loadingText).toHaveText('Loading...');
    });

    test('should display dashboard header after loading', async ({ page }) => {
        // Simulate loading completion by waiting for the skeleton to disappear
        await page.waitForSelector('text=Loading...', { state: 'hidden' });

        // Fetch the number of tasks (this is an example, adjust as needed)
        const numberOfTasks = 6; // Replace with dynamic data if available

        // Construct the expected text
        const expectedText = `This week you have ${numberOfTasks} tasks`;

        // Check that the DashboardHeader displays the correct message
        await expect(page.locator(`text=${expectedText}`)).toBeVisible();
    });

    test('should go taskboard page when see more button is clicked', async ({ page }) => { 
        const seeMoreButton = page.locator('button[data-testid="see-more-button"]');
        await seeMoreButton.click();
        await page.waitForNavigation();
        expect(page.url()).toBe('http://localhost:3000/tasks');
    });

    

});