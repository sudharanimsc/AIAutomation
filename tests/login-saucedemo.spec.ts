import { test, expect } from '@playwright/test';

test.describe('SauceDemo login flow', () => {
  test('allows a valid user to log in and view products', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator('#user-name')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#login-button')).toBeVisible();

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toContainText('Products');
  });

  test('rejects invalid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('wrong_password');
    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toContainText(/Username and password do not match/);
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com\//);
  });
});
