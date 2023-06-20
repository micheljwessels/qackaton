import { test, expect } from '@playwright/test';

test('Navigate to the login page and login', async ({ page }) => {
  await page.goto('https://thinking-tester-contact-list.herokuapp.com/');
  await expect(page).toHaveTitle('Contact List App');
  await page.locator('//input[@id="email"]').fill('michel.wessels@wearetriple.com');
  await page.locator('//input[@id="password"]').fill('TestTeam');
  await page.locator('//button[@id="submit"]').click();
  await expect(page.locator('//button[@id="add-contact"]')).toBeVisible();
});

