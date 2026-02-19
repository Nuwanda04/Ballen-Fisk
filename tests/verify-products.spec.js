import { expect, test } from '@playwright/test';
import { categories, products } from '../src/data/products.js';

test.describe('Product Verification', () => {
    test('should report all product issues', async ({ page }) => {
        // Go to the home page
        await page.goto('/');

        // Wait for the products section to be visible
        const productsSection = page.locator('#products');
        await expect(productsSection).toBeVisible({ timeout: 10000 });

        const errors = [];
        const missingImages = [];
        const missingProducts = [];

        // Iterate through each category
        for (const category of categories) {
             console.log(`Verifying category: ${category.name_da}`);

             // Find category button
             const categoryButton = page.locator(`button:has-text("${category.name_da}")`).first();

             if (await categoryButton.isVisible()) {
                 await categoryButton.click();
             } else {
                 console.warn(`Category button for ${category.name_da} not found. Skipping.`);
                 errors.push(`Category button missing: ${category.name_da}`);
                 continue;
             }

             await page.waitForTimeout(500);

             const expectedProducts = products.filter(p => p.category_id === category.id);
             const foundProducts = new Set();

             // Pagination loop
             while (true) {
                 const productCards = productsSection.locator('.grid > div');
                 const count = await productCards.count();
                 for (let i = 0; i < count; i++) {
                     const card = productCards.nth(i);
                     const nameElement = card.locator('h3');
                     if (await nameElement.isVisible()) {
                         const name = await nameElement.innerText();
                         foundProducts.add(name);

                         const productData = expectedProducts.find(p => p.name_da === name);
                         if (productData) {
                             // Verify Price
                             const priceElement = card.locator('.absolute.top-4.right-4');
                             const priceText = await priceElement.innerText();
                             // We could validate price text format here but keeping it loose for now.

                             // Verify Image
                             if (productData.image) {
                                 const img = card.locator('img');
                                 if (!await img.isVisible()) {
                                     missingImages.push(`${name} (${productData.image})`);
                                 }
                             }
                         }
                     }
                 }

                 const nextButton = page.getByRole('button', { name: 'Næste' });
                 if (await nextButton.isVisible() && await nextButton.isEnabled()) {
                     await nextButton.click();
                     await page.waitForTimeout(500);
                 } else {
                     break;
                 }
             }

             const missing = expectedProducts.filter(p => !foundProducts.has(p.name_da));
             if (missing.length > 0) {
                 missing.forEach(p => missingProducts.push(`${p.name_da} in ${category.name_da}`));
             }
        }

        console.log('Verification Complete.');
        console.log('Missing Products:', missingProducts);
        console.log('Missing Images:', missingImages);
        console.log('Other Errors:', errors);

        // Fail if any issues
        if (missingProducts.length > 0 || missingImages.length > 0 || errors.length > 0) {
            // We want to see the output, so we fail with a message
            const report = `
            Missing Products: ${missingProducts.join(', ')}
            Missing Images: ${missingImages.join(', ')}
            Errors: ${errors.join(', ')}
            `;
            throw new Error(`Verification Failed:\n${report}`);
        }
    });
});
