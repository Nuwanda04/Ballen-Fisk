import { motion } from 'framer-motion';
import { Coffee, Cookie, Fish, Flame, Package, Salad, Snowflake, Star, UtensilsCrossed } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { dataService } from '../services/dataService';

const categoryIcons = {
  'fresh-fish': Fish,
  'smoked-fish': Flame,
  'fish-cakes': Cookie,
  'ready-meals': UtensilsCrossed,
  'salads': Salad,
  'frozen': Snowflake,
  'beverages': Coffee,
  'friture-rejer': Star
};

export const Products = () => {
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catData = await dataService.getCategories();
        setCategories(catData);
        if (catData.length > 0) {
          setSelectedCategory(catData[0].id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (selectedCategory) {
        try {
          const prodData = await dataService.getProducts(selectedCategory);
          setProducts(prodData);
          setCurrentPage(1); // Reset to first page on category change
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const getCategoryName = (category) => {
    return category[`name_${language}`] || category.name_da;
  };

  const getProductName = (product) => {
    return product[`name_${language}`] || product.name_da;
  };

  // Pagination logic
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#3E92CC] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B132B] mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600">{t('products.categories')}</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = categoryIcons[category.slug] || Package;
            const isActive = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 border-2 ${
                  isActive
                    ? 'bg-[#0B132B] border-[#0B132B] text-white shadow-xl scale-105'
                    : 'bg-white border-gray-100 text-gray-600 hover:border-[#3E92CC] hover:text-[#3E92CC]'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#3E92CC]' : 'text-gray-400'}`} />
                <span className="font-bold whitespace-nowrap">{getCategoryName(category)}</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentProducts.map((product, index) => {
            const imageUrl = product.image
              ? new URL(`../assets/${product.image}`, import.meta.url).href
              : null;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={getProductName(product)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                      <Fish className="w-16 h-16 text-[#3E92CC]/20" />
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-[#0B132B] mb-2 leading-tight group-hover:text-[#3E92CC] transition-colors">
                    {getProductName(product)}
                  </h3>

                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-black text-[#0B132B]">
                        {product.price === 0 ? 'Tjek dagspris' : `${product.price},-`}
                      </span>
                      {product.unit && (
                        <span className="text-sm text-gray-500 ml-1">/{product.unit}</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            <button
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-gray-100 text-[#0B132B] hover:border-[#3E92CC] hover:text-[#3E92CC]'
              }`}
            >
              {t('products.prev')}
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 rounded-xl font-bold transition-all ${
                    currentPage === i + 1
                      ? 'bg-[#0B132B] text-white shadow-lg'
                      : 'bg-white border-2 border-gray-100 text-gray-600 hover:border-[#3E92CC] hover:text-[#3E92CC]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl font-bold transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border-2 border-gray-100 text-[#0B132B] hover:border-[#3E92CC] hover:text-[#3E92CC]'
              }`}
            >
              {t('products.next')}
            </button>
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-sm text-gray-400 italic font-light max-w-2xl mx-auto"
        >
          * {t('products.disclaimer')}
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#f9fafb"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
};
