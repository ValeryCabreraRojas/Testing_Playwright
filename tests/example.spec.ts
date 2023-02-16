import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Gmail' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/mail/);
});
