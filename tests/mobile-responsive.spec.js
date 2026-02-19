import { expect, test } from '@playwright/test';

test.use({
  viewport: { width: 390, height: 844 }, // iPhone 12/13/14
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
});

test('Mobile Responsiveness Check', async ({ page }) => {
  await page.goto('/');

  // 1. Check for horizontal scroll (overflow)
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

  if (scrollWidth > clientWidth) {
    console.log(`Horizontal Overflow Detected: scrollWidth (${scrollWidth}) > clientWidth (${clientWidth})`);
  } else {
    console.log('No horizontal overflow detected.');
  }

  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // Allow 1px tolerance

  // 2. Check Key Elements Visibility
  await expect(page.locator('nav')).toBeVisible(); // simplified check, might need specific selector if simple 'nav' doesn't exist
  await expect(page.locator('h1')).toBeVisible(); // Hero title
  await expect(page.locator('#products')).toBeVisible();
  await expect(page.locator('footer')).toBeVisible();

  // 3. Screenshot
  await page.screenshot({ path: 'mobile-home.png', fullPage: true });
});
