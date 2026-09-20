import { test, expect } from '@playwright/test';

test.describe('SauceDemo problem-user visual bug detection', () => {
  test('shows the same broken-image asset for every product', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('problem_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/\/inventory\.html$/);

    const images = page.locator('img.inventory_item_img');
    await expect(images).toHaveCount(6);

    const srcs = await images.evaluateAll((els) => els.map((el) => el.getAttribute('src')));
    expect(new Set(srcs).size).toBe(1);
    expect(srcs[0]).toContain('sl-404');
  });
});
