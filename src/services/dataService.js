import { categories, products, subcategories } from '../data/products';

export const dataService = {
  async getCategories() {
    return [...categories].sort((a, b) => a.sort_order - b.sort_order);
  },

  async getSubcategories(categoryId = null) {
    let result = [...subcategories];
    if (categoryId) {
      result = result.filter(s => s.category_id === categoryId);
    }
    return result;
  },

  async getProducts(categoryId = null) {
    let result = [...products];
    if (categoryId) {
      result = result.filter(p => p.category_id === categoryId);
    }
    // Sort alphabetically by name_da
    return result.sort((a, b) => a.name_da.localeCompare(b.name_da, 'da'));
  },

  async getFeaturedProducts() {
    return products.filter(p => p.is_featured).sort((a, b) => a.name_da.localeCompare(b.name_da, 'da'));
  },

  async getSamsoFavoritter() {
    return products.filter(p => p.is_samso_favorit).sort((a, b) => a.name_da.localeCompare(b.name_da, 'da'));
  }
};

