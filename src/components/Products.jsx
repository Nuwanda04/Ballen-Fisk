import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Coffee, Fish, Flame, Grid3X3, Package, Salad, Snowflake, Star, UtensilsCrossed, Wine } from 'lucide-react';
import { useEffect, useState } from 'react';
import { subcategories as subcategoriesData } from '../data/products';
import { useLanguage } from '../i18n/LanguageContext';
import { dataService } from '../services/dataService';

// Pre-resolve all asset images at build time (handles spaces/special chars in paths)
const imageModules = import.meta.glob('../assets/**/*.{jpeg,jpg,png,webp,svg}', { eager: true });
const imageMap = {};
for (const [path, mod] of Object.entries(imageModules)) {
  // Robustly handle path: use everything after "/assets/"
  const key = path.split('/assets/')[1];
  if (key) {
    imageMap[key] = mod.default;
  }
}

const categoryIcons = {
  'all': Grid3X3,
  'fresh-fish': Fish,
  'smoked-fish': Flame,
  'ready-meals': UtensilsCrossed,
  'shellfish': Star,
  'salads': Salad,
  'frozen': Snowflake,
  'friture': Star,
  'beverages': Coffee,
  'misc': Package
};

// Subcategory icons mapping
const subcategoryIcons = {
  'Fish': Fish,
  'UtensilsCrossed': UtensilsCrossed,
  'Cookie': Star,
  'Shrimp': Star,
  'Shellfish': Star,
  'Coffee': Coffee,
  'Wine': Wine
};

// Vibrant Pastel Colors Palette (Distinct from White, One Blue Rule)
const gradientColors = [
  '#FFFFFF', // White (0: All)
  '#FF7EB9', // Deep Pink (1: Diverse)
  '#FDBA74', // Deep Orange (2: Drikkevarer)
  '#FDE047', // Deep Yellow (3: Fersk Fisk)
  '#86EFAC', // Deep Green (4: Fiskefrikadeller & Fileter)
  '#5EEAD4', // Deep Teal (5: Friture rejer)
  '#7DD3FC', // Deep Sky Blue (6: Frostvarer)
  '#E376D4', // Orchid/Pink (7: Færdigretter - User requested #e376d4)
  '#9153CE', // Røget Fisk (User requested #9153ce)
  '#B82568', // Salater & Delikatesser (User requested #b82568)
];

export const Products = () => {
  const { t, language } = useLanguage();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const catData = await dataService.getCategories();

        // Sort categories by sort_order
        catData.sort((a, b) => a.sort_order - b.sort_order);

        setCategories(catData);

        // Fetch all products initially
        const prodData = await dataService.getProducts();
        setProducts(prodData);

        if (catData.length > 0) {
          // Default to first category if 'all' isn't desired, or 'all' if you want everything shown.
          // Since the sidebar has "Categories" header and then a list, maybe 'all' isn't in the list?
          // The previous code verified that catData[0].id is used if selectedCategory is null.
          setSelectedCategory(catData[0].id);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // No longer need a separate useEffect for products based on selectedCategory
  // as all products are fetched once and then filtered.

  const getCategoryName = (category) => {
    return category[`name_${language}`] || category.name_da;
  };

  const getProductName = (product) => {
    return product[`name_${language}`] || product.name_da;
  };

  const getSubcategoryName = (subcategory) => {
    return subcategory[`name_${language}`] || subcategory.name_da;
  };

  // Get subcategories for current category
  const currentSubcategories = subcategoriesData.filter(
    sub => sub.category_id === selectedCategory
  );

  // Pagination logic
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 0 || product.category_id === selectedCategory;
    const subcategoryMatch = !selectedSubcategory || product.subcategory_id === selectedSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="relative pt-24 md:pt-48 pb-32 md:pb-52 overflow-hidden" style={{ background: 'linear-gradient(159deg, rgba(100,149,237,1) 0%, rgba(124,158,195,1) 100%)' }}>
      {/* Top Shape Divider (White Overlay) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -mt-1">
        <svg viewBox="0 0 1440 200" className="block w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,0L0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,0Z"
          />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            {t('products.title')}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-full lg:w-1/4 space-y-3">
             {categories.map((category, index) => {
              const Icon = categoryIcons[category.slug] || Package;
              const isActive = selectedCategory === category.id;
              const myColor = gradientColors[index % gradientColors.length];

// Helper to convert hex to rgba
const convertHexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedSubcategory(null);
                    setCurrentPage(1);
                  }}
                  style={{
                    borderColor: myColor,
                    backgroundColor: convertHexToRgba(myColor, isActive ? 0.45 : 0.15)
                  }}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 border-2 text-left shadow-sm backdrop-blur-md group ${
                    isActive
                      ? 'shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-105'
                      : 'hover:scale-105'
                  }`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = convertHexToRgba(myColor, isActive ? 0.55 : 0.25);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = convertHexToRgba(myColor, isActive ? 0.45 : 0.15);
                  }}
                >
                  <Icon
                    className="w-6 h-6 transition-transform group-hover:scale-110"
                    style={{
                      color: 'white',
                      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))'
                    }}
                  />
                  <span
                    className="text-lg font-bold tracking-wide text-white"
                    style={{
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {getCategoryName(category)}
                  </span>
                </button>
              );
            })}
          </div>



          {/* Mobile Category Dropdown */}
          <div className="w-full lg:hidden mb-6 relative z-30">
            <h3 className="text-white text-sm font-bold mb-2">{t('products.categories')}</h3>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#3E92CC] border-2 border-white/30 text-white shadow-lg"
            >
              <div className="flex items-center gap-3">
                 {(() => {
                    const activeCat = categories.find(c => c.id === selectedCategory) || categories[0];
                    if (!activeCat) return null;
                    const Icon = categoryIcons[activeCat.slug] || Package;
                    return (
                      <>
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{getCategoryName(activeCat)}</span>
                      </>
                    );
                 })()}
              </div>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 opacity-70" />

              </motion.div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-[#0B132B] border border-white/10 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto"
                >
                  {categories.map((category, index) => {
                    const Icon = categoryIcons[category.slug] || Package;
                    const isActive = selectedCategory === category.id;
                    const myColor = gradientColors[index % gradientColors.length]; // Sidebar color logic

                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setCurrentPage(1);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 border-l-4 transition-colors ${
                           isActive ? 'bg-white/10' : 'hover:bg-white/5'
                        }`}
                        style={{
                          borderLeftColor: myColor
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: myColor }} />
                        <span className="font-medium text-white">{getCategoryName(category)}</span>
                         {isActive && <div className="ml-auto w-2 h-2 rounded-full bg-white" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Grid & Pagination */}
          <div className="w-full lg:w-3/4 mt-0">
            {/* Current Category Heading */}
            {(() => {
              const currentCategory = categories.find(c => c.id === selectedCategory);
              if (!currentCategory) return null;
              const Icon = categoryIcons[currentCategory.slug] || Package;
              const catIndex = categories.indexOf(currentCategory);
              const iconColor = catIndex >= 0 ? gradientColors[catIndex % gradientColors.length] : '#3E92CC';

              return (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl shadow-lg"
                      style={{ backgroundColor: `${iconColor}40` }}
                    >
                      <Icon className="w-6 h-6 text-white" style={{ filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.3))' }} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                      {getCategoryName(currentCategory)}
                    </h3>
                    <span className="text-white/70 text-sm ml-auto">
                      {filteredProducts.length} {filteredProducts.length === 1 ? t('products.item') : t('products.items')}
                    </span>
                  </div>
                </motion.div>
              );
            })()}

            {/* Subcategory Filter Tags */}
            {currentSubcategories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                <motion.button
                  onClick={() => {
                    setSelectedSubcategory(null);
                    setCurrentPage(1);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !selectedSubcategory
                      ? 'text-white shadow-lg bg-white/30'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span>{t('products.all')}</span>
                </motion.button>
                {currentSubcategories.map((subcategory) => {
                  const Icon = subcategoryIcons[subcategory.icon] || Star;
                  const isActive = selectedSubcategory === subcategory.id;
                  const catIndex = categories.findIndex(c => c.id === selectedCategory);
                  const myColor = catIndex >= 0 ? gradientColors[catIndex % gradientColors.length] : '#3E92CC';

                  return (
                    <motion.button
                      key={subcategory.id}
                      onClick={() => {
                        setSelectedSubcategory(subcategory.id);
                        setCurrentPage(1);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                      }`}
                      style={isActive ? {
                        backgroundColor: myColor,
                        boxShadow: `0 4px 15px ${myColor}60`
                      } : {}}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{getSubcategoryName(subcategory)}</span>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-16">
              <AnimatePresence mode="popLayout">
                {currentProducts.map((product) => {
                  const imageUrl = product.image ? imageMap[product.image] || null : null;

                  // Find category/icon details for this product
                  const category = categories.find(c => c.id === product.category_id);
                  const Icon = category ? (categoryIcons[category.slug] || Package) : Package;
                  // Use same color logic as sidebar
                  const catIndex = category ? categories.indexOf(category) : -1;
                  const iconColor = catIndex >= 0 ? gradientColors[catIndex % gradientColors.length] : '#3E92CC';

                  return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >
                    <div className="relative h-32 md:h-48 overflow-hidden">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={getProductName(product)}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                          <Fish className="w-12 h-12 md:w-16 md:h-16 text-[#3E92CC]/20" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />


                    </div>

                    <div className="p-3 md:p-5 flex flex-col flex-grow">
                      <h3 className="text-sm md:text-lg font-bold text-[#0B132B] leading-tight group-hover:text-[#3E92CC] transition-colors line-clamp-2 mb-2">{getProductName(product)}</h3>
                      <div className="mt-auto pt-1 flex items-baseline justify-end gap-1.5">
                        {product.price === 0 ? (
                          <span className="text-sm font-medium text-gray-400 italic bg-gray-50 px-2 py-1 rounded-md">{t('products.askStore')}</span>
                        ) : (
                          (() => {
                            let displayPrice = product.price;
                            let displayUnit = product.unit ? `/${product.unit}` : '';

                            // Convert grams to 100g for better readability
                            if (product.unit === 'g') {
                              displayPrice = product.price * 100;
                              displayUnit = '/ 100g';

                              // Format distinctively if needed, but standard number is fine
                              // If it results in a long decimal, we might want to round, but usually these are clean.
                              displayPrice = parseFloat(displayPrice.toFixed(2));
                            }

                            return (
                              <>
                                <span className="text-2xl md:text-3xl font-black text-[#0B132B] tracking-tight">
                                  {displayPrice}
                                </span>
                                <div className="flex flex-col justify-end pb-1">
                                  <span className="text-[10px] md:text-xs font-bold text-[#3E92CC] uppercase tracking-wider leading-none">
                                    DKK
                                  </span>
                                  {displayUnit && (
                                    <span className="text-[10px] md:text-xs font-medium text-gray-400 leading-none">
                                      {displayUnit}
                                    </span>
                                  )}
                                </div>
                              </>
                            );
                          })()
                        )}
                      </div>
                      {product.description && <p className="text-gray-600 text-xs md:text-sm mt-2 line-clamp-2 hidden md:block">{product.description}</p>}
                    </div>
                  </motion.div>
                );})}
              </AnimatePresence>
            </div>

            {/* Condensed Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center flex-wrap gap-2">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-colors font-medium text-sm"
                >
                  {t('products.prev')}
                </button>

                {(() => {
                  const pages = [];
                  // Logic for condensed pagination:
                  // Always show 1
                  // Always show last page
                  // Show current page and neighbours

                  const showEllipsisStart = currentPage > 3;
                  const showEllipsisEnd = currentPage < totalPages - 2;

                  if (totalPages <= 7) {
                    for (let i = 1; i <= totalPages; i++) pages.push(i);
                  } else {
                    pages.push(1);
                    if (showEllipsisStart) pages.push('...');

                    let start = Math.max(2, currentPage - 1);
                    let end = Math.min(totalPages - 1, currentPage + 1);

                    if (!showEllipsisStart) start = 2;
                    if (!showEllipsisEnd) end = totalPages - 1;

                    for (let i = start; i <= end; i++) {
                      pages.push(i);
                    }

                    if (showEllipsisEnd) pages.push('...');
                    pages.push(totalPages);
                  }

                  return pages.map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && paginate(page)}
                      disabled={page === '...'}
                      className={`min-w-[40px] h-10 px-2 rounded-lg font-bold transition-all text-sm ${
                        page === currentPage
                          ? 'bg-white text-[#3E92CC] shadow-lg scale-105'
                          : page === '...'
                            ? 'text-white/60 cursor-default'
                            : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ));
                })()}

                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-30 hover:bg-white/20 transition-colors font-medium text-sm"
                >
                  {t('products.next')}
                </button>
              </div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-sm text-white/60 italic font-light max-w-2xl mx-auto"
            >
              * {t('products.disclaimer')}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg viewBox="0 0 1440 200" className="block w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,106.7C960,107,1056,85,1152,74.7C1248,64,1344,64,1392,64L1440,64L1440,200L0,200Z"
          />
        </svg>
      </div>
    </section>
  );
};
