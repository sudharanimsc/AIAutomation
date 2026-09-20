import { test, expect } from '@playwright/test';

test.describe('SauceDemo login flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();
  });

  test('allows a valid user to log in and view products', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('rejects invalid credentials with a clear validation error', async ({ page }) => {
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toContainText(/Epic sadface: Username and password do not match any user in this service|Username and password do not match/);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\/?$/);
  });
});
