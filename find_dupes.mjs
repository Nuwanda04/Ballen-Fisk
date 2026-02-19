import { categories, products } from './src/data/products.js';

// Group by name
const byName = {};
products.forEach(p => {
  const key = p.name_da.toLowerCase().trim();
  if (!byName[key]) byName[key] = [];
  byName[key].push(p);
});

// Find duplicates
let found = false;
console.log('=== DUPLICATE PRODUCTS (same name) ===\n');
Object.entries(byName).forEach(([name, prods]) => {
  if (prods.length > 1) {
    found = true;
    console.log(`"${prods[0].name_da}" appears ${prods.length} times:`);
    prods.forEach(p => {
      const cat = categories.find(c => c.id === p.category_id);
      console.log(`  ID ${p.id} | Cat: ${cat?.name_da || 'unknown'} | Price: ${p.price} ${p.unit || ''} | Image: ${p.image || 'none'}`);
    });
    console.log('');
  }
});

if (!found) console.log('No duplicates found.');

// Also check for similar names (fuzzy)
console.log('\n=== SIMILAR NAMES (potential duplicates) ===\n');
const names = Object.keys(byName);
for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    const a = names[i].replace(/[^a-zæøå]/g, '');
    const b = names[j].replace(/[^a-zæøå]/g, '');
    // Check if one contains the other or very similar
    if (a.length > 3 && b.length > 3 && (a.includes(b) || b.includes(a)) && a !== b) {
      const pa = byName[names[i]];
      const pb = byName[names[j]];
      // Only flag if in same category
      const sameCat = pa.some(x => pb.some(y => x.category_id === y.category_id));
      if (sameCat) {
        console.log(`"${pa[0].name_da}" <-> "${pb[0].name_da}"`);
        pa.forEach(p => console.log(`  ID ${p.id} | Cat ${p.category_id} | Price: ${p.price} ${p.unit||''}`));
        pb.forEach(p => console.log(`  ID ${p.id} | Cat ${p.category_id} | Price: ${p.price} ${p.unit||''}`));
        console.log('');
      }
    }
  }
}
