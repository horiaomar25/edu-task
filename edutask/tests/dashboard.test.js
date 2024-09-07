import { test, expect } from '@playwright/test';

test.describe('DashBoardGrid Component', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the page where the DashBoardGrid component is rendered
        await page.goto('http://localhost:3000/dashboard');
    });

    test('should display the clock once loading is complete', async ({ page }) => {
        // Ensure the loading state is visible initially
        const loadingText = page.locator('[data-testid="loading-heading"]');
        await loadingText.waitFor({ state: 'visible' });
        await expect(loadingText).toHaveText('Loading...');

        // Wait for the loading state to disappear
        await loadingText.waitFor({ state: 'hidden' });

        // Verify that the Clock component is visible
        const clock = page.locator('[data-testid="dashboard-clock"]');
        await clock.waitFor({ state: 'visible' });
        expect(await clock.isVisible()).toBeTruthy();
    });
});
