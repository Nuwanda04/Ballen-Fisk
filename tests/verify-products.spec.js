import fs from 'node:fs';
import path from 'node:path';
import { expect, test } from '@playwright/test';
import { categories, products, subcategories } from '../src/data/products.js';
import { productTranslations } from '../src/data/productTranslations.js';

const assetsRoot = path.resolve('src/assets');

test.describe('Product catalogue integrity', () => {
  test('has unique ids, valid relationships, and existing images', () => {
    const ids = products.map(product => product.id);
    expect(new Set(ids).size).toBe(ids.length);

    const categoryIds = new Set(categories.map(category => category.id));
    const subcategoryIds = new Set(subcategories.map(subcategory => subcategory.id));

    for (const product of products) {
      expect(categoryIds.has(product.category_id), `${product.name_da} has an invalid category`).toBe(true);

      if (product.subcategory_id !== undefined) {
        expect(subcategoryIds.has(product.subcategory_id), `${product.name_da} has an invalid subcategory`).toBe(true);
      }

      if (product.image) {
        expect(fs.existsSync(path.join(assetsRoot, product.image)), `${product.image} is missing`).toBe(true);
      }
    }
  });

  test('has English and German names for every product', () => {
    for (const product of products) {
      expect(productTranslations.en[product.id], `${product.name_da} is missing an English name`).toBeTruthy();
      expect(productTranslations.de[product.id], `${product.name_da} is missing a German name`).toBeTruthy();
    }
  });

  test('renders every category and every product page without broken images', async ({ page }) => {
    await page.goto('/');
    const productsSection = page.locator('#products');
    await expect(productsSection).toBeVisible();

    for (const category of categories) {
      await page.getByRole('button', { name: category.name_da, exact: true }).first().click();
      await expect(productsSection.locator('.grid > div').first()).toBeVisible();

      const expectedCount = category.id === 0
        ? products.length
        : products.filter(product => product.category_id === category.id).length;
      expect(expectedCount).toBeGreaterThan(0);

      const totalPages = Math.ceil(expectedCount / 6);
      for (let currentPage = 1; currentPage <= totalPages; currentPage += 1) {
        const brokenImages = await productsSection.locator('img').evaluateAll((images) => images
          .filter((image) => image.currentSrc && image.naturalWidth === 0)
          .map((image) => ({ alt: image.alt, src: image.currentSrc })));
        expect(brokenImages, `Broken product images in ${category.name_da}, page ${currentPage}`).toEqual([]);

        if (currentPage < totalPages) {
          await productsSection.getByRole('button', { name: 'Næste', exact: true }).click();
          await expect(productsSection.locator('.grid > div').first()).toBeVisible();
        }
      }
    }
  });
});
