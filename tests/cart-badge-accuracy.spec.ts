import { test, expect } from '@playwright/test';

test.describe('SauceDemo cart badge accuracy', () => {
  test('shows the correct cart count when adding and removing items', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);

    const addButtons = page.locator('button:has-text("Add to cart")');
    await addButtons.nth(0).click();
    await addButtons.nth(1).click();
    await addButtons.nth(2).click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

    await page.locator('.shopping_cart_link').click();
    await page.waitForURL(/\/cart\.html$/);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

    await page.locator('.cart_button').first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });
});
