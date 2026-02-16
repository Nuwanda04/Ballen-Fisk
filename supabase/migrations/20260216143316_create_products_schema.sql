/*
  # Ballen Fisk Product Schema - 40 Year Anniversary

  ## Overview
  This migration creates the database structure for Ballen Fisk's product catalog,
  featuring 8 product categories and a special "Samsø Favoritter" system.
  
  ## New Tables
  
  ### `categories`
  - `id` (uuid, primary key) - Unique category identifier
  - `name_da` (text) - Category name in Danish
  - `name_en` (text) - Category name in English
  - `name_de` (text) - Category name in German
  - `slug` (text, unique) - URL-friendly identifier
  - `sort_order` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp
  
  ### `products`
  - `id` (uuid, primary key) - Unique product identifier
  - `category_id` (uuid, foreign key) - Links to categories table
  - `name_da` (text) - Product name in Danish
  - `name_en` (text) - Product name in English
  - `name_de` (text) - Product name in German
  - `description_da` (text) - Description in Danish
  - `description_en` (text) - Description in English
  - `description_de` (text) - Description in German
  - `image_url` (text) - Product image URL
  - `is_featured` (boolean) - Featured product flag
  - `is_samso_favorit` (boolean) - Part of special offer
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp
  
  ## Security
  - Enable RLS on both tables
  - Public read access for all products and categories
  - Authenticated write access for admin operations
  
  ## Initial Data
  - Seeds 8 product categories (Fersk Fisk, Røget Fisk, etc.)
  - Seeds Samsø Favoritter items (Tempurarejer, Kartoffelrejer, Krebbekugler)
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_da text NOT NULL,
  name_en text NOT NULL,
  name_de text NOT NULL,
  slug text UNIQUE NOT NULL,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name_da text NOT NULL,
  name_en text NOT NULL,
  name_de text NOT NULL,
  description_da text DEFAULT '',
  description_en text DEFAULT '',
  description_de text DEFAULT '',
  image_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  is_samso_favorit boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Public read access for categories
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Public read access for products
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Authenticated write access for categories
CREATE POLICY "Authenticated users can manage categories"
  ON categories FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Authenticated write access for products
CREATE POLICY "Authenticated users can manage products"
  ON products FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert 8 product categories
INSERT INTO categories (name_da, name_en, name_de, slug, sort_order) VALUES
  ('Fersk Fisk', 'Fresh Fish', 'Frischer Fisch', 'fresh-fish', 1),
  ('Røget Fisk', 'Smoked Fish', 'Geräucherter Fisch', 'smoked-fish', 2),
  ('Fiskefrikadeller & Fiskefillet', 'Fish Cakes & Fillets', 'Fischfrikadellen & Filets', 'fish-cakes-fillets', 3),
  ('Færdigretter', 'Ready Meals', 'Fertiggerichte', 'ready-meals', 4),
  ('Salat', 'Salads', 'Salate', 'salads', 5),
  ('Frostvarer', 'Frozen Goods', 'Tiefkühlprodukte', 'frozen-goods', 6),
  ('Drikkevarer', 'Beverages', 'Getränke', 'beverages', 7),
  ('Diverse', 'Miscellaneous', 'Verschiedenes', 'miscellaneous', 8)
ON CONFLICT (slug) DO NOTHING;

-- Insert Samsø Favoritter products
INSERT INTO products (category_id, name_da, name_en, name_de, description_da, description_en, description_de, is_samso_favorit, is_featured)
SELECT 
  (SELECT id FROM categories WHERE slug = 'ready-meals'),
  'Tempurarejer',
  'Tempura Shrimp',
  'Tempura Garnelen',
  'Sprøde tempurarejer - vælg 4 for tilbud',
  'Crispy tempura shrimp - choose any 4 for a discount',
  'Knusprige Tempura-Garnelen - wählen Sie 4 zum Sonderpreis',
  true,
  true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name_da = 'Tempurarejer');

INSERT INTO products (category_id, name_da, name_en, name_de, description_da, description_en, description_de, is_samso_favorit, is_featured)
SELECT 
  (SELECT id FROM categories WHERE slug = 'ready-meals'),
  'Kartoffelrejer',
  'Potato Shrimp',
  'Kartoffelgarnelen',
  'Hjemmelavede kartoffelrejer - vælg 4 for tilbud',
  'Homemade potato shrimp - choose any 4 for a discount',
  'Hausgemachte Kartoffelgarnelen - wählen Sie 4 zum Sonderpreis',
  true,
  true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name_da = 'Kartoffelrejer');

INSERT INTO products (category_id, name_da, name_en, name_de, description_da, description_en, description_de, is_samso_favorit, is_featured)
SELECT 
  (SELECT id FROM categories WHERE slug = 'ready-meals'),
  'Krebbekugler',
  'Crab Balls',
  'Krabbenbällchen',
  'Lækre krebbekugler - vælg 4 for tilbud',
  'Delicious crab balls - choose any 4 for a discount',
  'Köstliche Krabbenbällchen - wählen Sie 4 zum Sonderpreis',
  true,
  true
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name_da = 'Krebbekugler');

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_products_samso_favorit ON products(is_samso_favorit);
