import { expect, test } from '@playwright/test';

for (const language of ['en', 'de']) {
  test(`${language} language URL loads localized metadata`, async ({ page }) => {
    await page.goto(`/${language}/`);

    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page).toHaveTitle(language === 'en' ? /Fresh fish/ : /Frischer Fisch/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/${language}/$`));
    await expect(page.locator('h1')).toHaveText(language === 'en' ? 'Ballen Fish' : 'Ballen Fisch');
  });
}
