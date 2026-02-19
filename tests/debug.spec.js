import { test } from '@playwright/test';

test('debug page content', async ({ page }) => {
  await page.goto('/');
  // Wait for 2 seconds to allow hydration
  await page.waitForTimeout(2000);
  console.log(await page.content());
  const products = await page.locator('#products').count();
  console.log('Products section count:', products);
});
