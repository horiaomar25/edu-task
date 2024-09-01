import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => { 
    test.beforeEach(async ({ page }) => {
        // Navigate to the homepage before each test
        await page.goto('http://localhost:3000/dashboard');
    });

    test('should display loading state', async ({ page }) => {
        // Verify the loading state is displayed
        const loadingText = page.locator('[data-testid="loading-heading"]');
        await loadingText.waitFor({ state: 'visible' });
        await expect(loadingText).toHaveText('Loading...');
    });

    test('should display dashboard header after loading', async ({ page }) => {

        test.setTimeout(80000);

        // Simulate loading completion by waiting for the skeleton to disappear
        await page.waitForSelector('text=Loading...', { state: 'hidden' });

        // Verify the dashboard header is displayed
        const dashboardHeader = page.locator('[data-testid="dashboard-header"]');
        await dashboardHeader.waitFor({ state: 'visible' });    
        expect(await dashboardHeader.isVisible()).toBeTruthy();

        

        

    });

    test('should go taskboard page when see more button is clicked', async ({ page }) => { 
        test.setTimeout(80000);

        const seeMoreButton = page.locator('button[data-testid="see-more-button"]');
        await seeMoreButton.click();
        await page.waitForNavigation();
        expect(page.url()).toBe('http://localhost:3000/tasks');
    });

    

});