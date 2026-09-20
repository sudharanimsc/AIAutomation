import { test, expect } from '@playwright/test';

test.describe('SauceDemo product sorting persistence', () => {
  test('keeps the selected sort order after going to a product and returning', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.locator('.title')).toHaveText('Products');

    const sortSelect = page.locator('select');
    await expect(sortSelect).toBeVisible();
    await sortSelect.selectOption('hilo');
    await expect(sortSelect).toHaveValue('hilo');

    const firstProductName = await page.locator('.inventory_item_name').first().textContent();
    expect(firstProductName).toBe('Sauce Labs Fleece Jacket');

    await page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' }).click();
    await page.waitForURL(/\/inventory-item\.html/);

    await page.goBack();
    await page.waitForURL(/\/inventory\.html$/);

    await expect(page.locator('select')).toHaveValue('hilo');
    const items = await page.locator('.inventory_item_name').allTextContents();
    expect(items[0]).toBe('Sauce Labs Fleece Jacket');
    expect(items[1]).toBe('Sauce Labs Backpack');
    expect(items[2]).toBe('Sauce Labs Bolt T-Shirt');
  });
});
