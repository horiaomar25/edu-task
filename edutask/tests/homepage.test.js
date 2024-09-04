import { test, expect } from '@playwright/test';

test.describe('HomePage', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the homepage before each test
        await page.goto('https://edu-task-horias-projects-dc29575b.vercel.app/');
    });

    test('should display task management heading', async ({ page }) => {
        // Verify the main heading on the homepage
        const heading = page.locator('[data-testid="hero-heading"]');
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText(/Task Management for Teaching Assistants:\s*Make School Life\s*Easier/);
    });

    test('scribble graphic  is displayed', async ({ page }) => {
        const scribbleImageContainer = page.locator('[data-testid="scribble-image-container"]');
        // Make sure the container is displayed so we can access the image element
        await expect(scribbleImageContainer).toBeVisible();

        // NOTE: In Next.js Image component which renders an <img> element underneath , you
        // can't directly add the data-testid attribute to the <Image> component.
        // Make sure to add the data-testid attribute to the parent container of the Image component.

        // Inside the container, locate the img element
        const scribbleImage = scribbleImageContainer.locator('img');
        // Make sure the image is displayed
        await expect(scribbleImage).toBeVisible();
        await expect(scribbleImage).toHaveAttribute('alt', 'scribble-graphic');
    });

    test('should display the Dashboard Button and Tasks Button', async ({ page }) => {
        // locate the dashboard button 
        const dashboardButton = page.locator('[data-testid="dashboard-button"]');
        const taskButton = page.locator('[data-testid="tasks-button"]');
        await expect(dashboardButton).toBeVisible();
        await expect(taskButton).toBeVisible();
    })

    test('should navigate to the dashboard page when the Dashboard button is clicked', async ({ page }) => {
        const dashboardButton = page.locator('[data-testid="dashboard-button"]');
        await expect(dashboardButton).toBeEnabled();
        await dashboardButton.click({ waitNavigation: true });
        await expect(page).toHaveURL('https://edu-task-horias-projects-dc29575b.vercel.app/tasks/dashboard');
    })

    test('should navigate to the taskboard when the Tasks button is clicked', async ({ page }) => {
        const tasksButton = page.locator('[data-testid="tasks-button"]');
        await expect(tasksButton).toBeEnabled();
        await tasksButton.click({ waitNavigation: true });
        await expect(page).toHaveURL('https://edu-task-horias-projects-dc29575b.vercel.app/tasks')
    })
}); 