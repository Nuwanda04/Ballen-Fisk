export const categories = [
  { id: 0, slug: 'all', name_da: 'Alle Varer', name_en: 'All Products', name_de: 'Alle Produkte', sort_order: 0 },
  { id: 1, slug: 'fresh-fish', name_da: 'Fersk Fisk', name_en: 'Fresh Fish', name_de: 'Frischer Fisch', sort_order: 1 },
  { id: 2, slug: 'ready-meals', name_da: 'Færdigretter', name_en: 'Ready Meals', name_de: 'Fertiggerichte', sort_order: 2 },
  { id: 3, slug: 'smoked-fish', name_da: 'Røget Fisk', name_en: 'Smoked Fish', name_de: 'Geräucherter Fisch', sort_order: 3 },
  { id: 4, slug: 'shellfish', name_da: 'Skaldyr', name_en: 'Shellfish', name_de: 'Schalentiere', sort_order: 4 },
  { id: 5, slug: 'frozen', name_da: 'Frostvarer', name_en: 'Frozen Goods', name_de: 'Tiefkühlwaren', sort_order: 5 },
  { id: 6, slug: 'salads', name_da: 'Salater & Delikatesser', name_en: 'Salads & Delis', name_de: 'Salate & Delikatessen', sort_order: 6 },
  { id: 7, slug: 'friture', name_da: 'Friture', name_en: 'Friture', name_de: 'Friture', sort_order: 7 },
  { id: 8, slug: 'beverages', name_da: 'Drikkevarer', name_en: 'Beverages', name_de: 'Getränke', sort_order: 8 },
  { id: 9, slug: 'misc', name_da: 'Diverse', name_en: 'Miscellaneous', name_de: 'Verschiedenes', sort_order: 9 }
];

export const subcategories = [
  // Fresh Fish subcategories
  { id: 1, category_id: 1, slug: 'whole-fish', name_da: 'Hel Fisk', name_en: 'Whole Fish', name_de: 'Ganzer Fisch', icon: 'Fish' },
  { id: 2, category_id: 1, slug: 'fish-fillets', name_da: 'Fiskefileter', name_en: 'Fish Fillets', name_de: 'Fischfilets', icon: 'Fish' },

  // Ready Meals subcategories
  { id: 3, category_id: 2, slug: 'daily-specials', name_da: 'Varme Retter', name_en: 'Hot Meals', name_de: 'Warme Gerichte', icon: 'UtensilsCrossed' },
  { id: 4, category_id: 2, slug: 'fish-cakes', name_da: 'Fiske-frikadeller og Filet', name_en: 'Fish Cakes & Fillet', name_de: 'Fischfrikadellen und Filet', icon: 'Cookie' },

  // Shellfish subcategories
  { id: 5, category_id: 4, slug: 'shrimp', name_da: 'Rejer', name_en: 'Shrimp', name_de: 'Garnelen', icon: 'Shrimp' },
  { id: 6, category_id: 4, slug: 'crab', name_da: 'Krabber', name_en: 'Crab', name_de: 'Krabben', icon: 'Shellfish' },
  { id: 7, category_id: 4, slug: 'lobster', name_da: 'Hummer', name_en: 'Lobster', name_de: 'Hummer', icon: 'Shellfish' },
  { id: 8, category_id: 4, slug: 'mussels', name_da: 'Muslinger', name_en: 'Mussels', name_de: 'Muscheln', icon: 'Shellfish' },
  { id: 9, category_id: 4, slug: 'oysters', name_da: 'Østers', name_en: 'Oysters', name_de: 'Austern', icon: 'Shellfish' },

  // Beverages subcategories
  { id: 10, category_id: 8, slug: 'soda', name_da: 'Sodavand', name_en: 'Soda', name_de: 'Limonade', icon: 'Coffee' },
  { id: 11, category_id: 8, slug: 'alcohol', name_da: 'Alkohol', name_en: 'Alcohol', name_de: 'Alkohol', icon: 'Wine' },
  { id: 12, category_id: 8, slug: 'soft-drinks', name_da: 'Saft', name_en: 'Soft drinks', name_de: 'Säfte', icon: 'Coffee' }
];

export const products = [
  {
    "id": 2,
    "category_id": 6,
    "name_da": "Tangsalat",
    "price": 30,
    "unit": null,
    "image": "Salat/Tangsalat.jpeg"
  },
  {
    "id": 3,
    "category_id": 6,
    "name_da": "Aioli",
    "price": 20,
    "unit": null,
    "image": "Salat/Aioli.jpeg"
  },
  {
    "id": 4,
    "category_id": 6,
    "name_da": "Sild",
    "price": 50,
    "unit": null,
    "image": "Salat/Sild.jpeg"
  },
  {
    "id": 5,
    "category_id": 6,
    "name_da": "Kartoffelsalat",
    "price": 0.1,
    "unit": "g",
    "image": "Salat/Kartoffelsalat.jpeg"
  },
  {
    "id": 6,
    "category_id": 8,
    "subcategory_id": 12,
    "name_da": "Alkoholfri øl",
    "price": 40,
    "unit": null,
    "image": "Drikkevarer/Alkoholdfri øl.jpeg"
  },
  {
    "id": 7,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Vodka aprikos",
    "price": 60,
    "unit": null,
    "image": "Drikkevarer/Vodka Abrikos.jpeg"
  },
  {
    "id": 8,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Gin lemon",
    "price": 60,
    "unit": null,
    "image": "Drikkevarer/Gin lemon.jpeg"
  },
  {
    "id": 9,
    "category_id": 8,
    "subcategory_id": 10,
    "name_da": "Sodavand",
    "price": 20,
    "unit": null,
    "image": "Drikkevarer/Sodavand.jpeg"
  },
  {
    "id": 10,
    "category_id": 8,
    "subcategory_id": 12,
    "name_da": "Kildevand",
    "price": 20,
    "unit": null,
    "image": "Drikkevarer/Kildevand.jpeg"
  },
  {
    "id": 11,
    "category_id": 8,
    "subcategory_id": 12,
    "name_da": "Samsø Saft",
    "price": 45,
    "unit": null,
    "image": "Drikkevarer/Samsø saft.jpeg"
  },
  {
    "id": 12,
    "category_id": 8,
    "subcategory_id": 12,
    "name_da": "Kaffe",
    "price": 25,
    "unit": null,
    "image": "Drikkevarer/Kaffe.jpeg"
  },
  {
    "id": 13,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Stjerneskud",
    "price": 155,
    "unit": null,
    "image": "Menu/Stjerneskud.jpeg"
  },
  {
    "id": 14,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Fish n' chips",
    "price": 145,
    "unit": null,
    "image": "Menu/Fish and chips.jpeg"
  },
  {
    "id": 15,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Tempura rejer & krabbekugler",
    "price": 85,
    "unit": null,
    "image": "Menu/Tempura rejer & krabbekugler.jpeg"
  },
  {
    "id": 16,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Torskenuggets",
    "price": 85,
    "unit": null,
    "image": "Menu/Torskenuggets.jpeg"
  },
  {
    "id": 17,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 fiskefilet med lille pommes",
    "price": 60,
    "unit": null,
    "image": "Menu/1 fiskefilet mlille pommes.jpeg"
  },
  {
    "id": 18,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefilet med stor pommes",
    "price": 100,
    "unit": null,
    "image": "Menu/2 Fiskefilet mstor pommes.jpeg"
  },
  {
    "id": 19,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 Fiskefilet med lille kartoffelsalat",
    "price": 60,
    "unit": null,
    "image": "Menu/1 Fiskefilet mlille kartoffelsalat.jpeg"
  },
  {
    "id": 20,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefilet med stor kartoffelsalat",
    "price": 100,
    "unit": null,
    "image": "Menu/2 Fiskefilet mstor kartoffelsalat.jpeg"
  },
  {
    "id": 21,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 Fiskefilet med rugbrød",
    "price": 50,
    "unit": null,
    "image": "Menu/1 Fiskefilet m rugbrød.jpeg"
  },
  {
    "id": 22,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefilet med rugbrød",
    "price": 90,
    "unit": null,
    "image": "Menu/2 Fiskefilet m rugbrød.jpeg"
  },
  {
    "id": 23,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 Fiskefrikadelle med lille pommes",
    "price": 60,
    "unit": null,
    "image": "Menu/1 Fiskefrikadelle m lille pommes.jpeg"
  },
  {
    "id": 24,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefrikadeller med stor pommes",
    "price": 100,
    "unit": null,
    "image": "Menu/2 Fiskefrikadeller m stor pommes.jpeg"
  },
  {
    "id": 25,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 Fiskefrikadelle med lille kartoffelsalat",
    "price": 60,
    "unit": null,
    "image": "Menu/1 Fiskefrikadelle mlille kartoffelsalat.jpeg"
  },
  {
    "id": 26,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefrikadeller med lille kartoffelsalat",
    "price": 100,
    "unit": null,
    "image": "Menu/2 Fiskefrikadeller mlille kartoffelsalat.jpeg"
  },
  {
    "id": 27,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "1 Fiskefrikadelle med rugbrød",
    "price": 50,
    "unit": null,
    "image": "Menu/1 Fiskefrikadelle mrugbrød.jpeg"
  },
  {
    "id": 28,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "2 Fiskefrikadeller med rugbrød",
    "price": 90,
    "unit": null,
    "image": "Menu/2 Fiskefrikadeller mrugbrød.jpeg"
  },
  {
    "id": 29,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Pommes frites",
    "price": 50,
    "unit": null,
    "image": "Menu/Pommes frites.jpeg"
  },
  {
    "id": 30,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Quinoa eller Pelle",
    "price": 60,
    "unit": null,
    "image": "Menu/Quinoa or pelle.jpeg"
  },
  {
    "id": 31,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Kylling burger med pommes",
    "price": 95,
    "unit": null,
    "image": "Menu/Kylling burger,pommes.jpeg"
  },
  {
    "id": 32,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Calamares med pommes",
    "price": 100,
    "unit": null,
    "image": "Menu/Calamares mpommes.jpeg"
  },
  {
    "id": 33,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Rejer, salat, brød & aioli",
    "price": 125,
    "unit": null,
    "image": "Menu/Rejer, salat, brød & aioli.jpeg"
  },
  {
    "id": 34,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Rejecocktail",
    "price": 125,
    "unit": null,
    "image": "Menu/Rejecoctail.jpeg"
  },
  {
    "id": 35,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Sandwich med frikadelle",
    "price": 85,
    "unit": null,
    "image": "Menu/Sandwich m frikadelle.jpeg"
  },
  {
    "id": 36,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Sandwich ribbenstech",
    "price": 85,
    "unit": null,
    "image": "Menu/Sandwich ribbenstech.jpeg"
  },
  {
    "id": 37,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Sandwich med rejer",
    "price": 95,
    "unit": null,
    "image": "Menu/Sandwich mrejer.jpeg"
  },
  {
    "id": 38,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Sandwich med laks",
    "price": 95,
    "unit": null,
    "image": "Menu/Sandwich mlaks.jpeg"
  },

  {
    "id": 40,
    "category_id": 2,
    "subcategory_id": 4,
    "name_da": "Fiskefrikadelle",
    "price": 18,
    "unit": null,
    "image": "Frikadelle og Fiskfilet/Fiskefrikadelle.jpeg"
  },
  {
    "id": 42,
    "category_id": 2,
    "subcategory_id": 4,
    "name_da": "Fiskefilet",
    "price": 18,
    "unit": null,
    "image": "Frikadelle og Fiskfilet/Fiskefilet.jpeg"
  },

  {
    "id": 44,
    "category_id": 7,
    "name_da": "Indbagte rejer med Aioli",
    "price": 60,
    "unit": null,
    "image": "Friture rejer/Indbagte rejer m Aioli.jpeg"
  },
  {
    "id": 45,
    "category_id": 3,
    "name_da": "Røget Sildefilet",
    "price": 15,
    "unit": null,
    "image": "Røget fisk/Røget Sildefilet.jpeg"
  },

  {
    "id": 47,
    "category_id": 3,
    "name_da": "Varmrøget Færøsk Laks",
    "price": 0.3,
    "unit": "g",
    "image": "Røget fisk/Røget færøsk laks.jpeg"
  },
  {
    "id": 48,
    "category_id": 3,
    "name_da": "Røget Makrel",
    "price": 55,
    "unit": null,
    "image": "Røget fisk/Røget Makrel.jpeg"
  },
  {
    "id": 49,
    "category_id": 3,
    "name_da": "Røget Sild",
    "price": 20,
    "unit": null,
    "image": "Røget fisk/Røget Sild.jpeg"
  },
  {
    "id": 50,
    "category_id": 3,
    "name_da": "Røget Dorade",
    "price": 25,
    "unit": null,
    "image": "Røget fisk/Røget Dorado.jpeg"
  },
  {
    "id": 51,
    "category_id": 3,
    "name_da": "Røget Ål",
    "price": 0.3,
    "unit": "g",
    "image": "Røget fisk/Røget Ål.jpeg"
  },
  {
    "id": 52,
    "category_id": 3,
    "name_da": "Røget Torskerogn",
    "price": 0.25,
    "unit": "g",
    "image": "Røget fisk/Røget Torskerovn.jpeg"
  },
  {
    "id": 53,
    "category_id": 3,
    "name_da": "Røget Musling",
    "price": 7,
    "unit": null,
    "image": "Røget fisk/Røget Musling.jpeg"
  },

  {
    "id": 55,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Skærisingfilet",
    "price": 0.16,
    "unit": "g"
  },
  {
    "id": 56,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Tun",
    "price": 0.3,
    "unit": "g",
    "image": "Hel fisk/Tun.jpeg"
  },
  {
    "id": 57,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Stenbider",
    "price": 0.08,
    "unit": "g",
    "image": "Hel fisk/Stenbider.jpeg"
  },
  {
    "id": 58,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Dorade",
    "price": 0.16,
    "unit": "g",
    "image": "Hel fisk/Dorado.jpeg"
  },
  {
    "id": 59,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Jomfruhummerhaler",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 60,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Søtunge",
    "price": 0.25,
    "unit": "kg",
    "image": "Hel fisk/Søtunge.jpeg"
  },
  {
    "id": 61,
    "category_id": 4,
    "subcategory_id": 7,
    "name_da": "Fersk Hummer",
    "price": 0.35,
    "unit": "g",
    "image": "Hel fisk/Hummer.jpeg"
  },
  {
    "id": 62,
    "category_id": 4,
    "subcategory_id": 7,
    "name_da": "Frost Pillede Jomfruhummerhaler",
    "price": 350,
    "unit": null
  },
  {
    "id": 63,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Frost Skalrejer",
    "price": 0.12,
    "unit": "g",
    "image": "Frost/Skalrejer.jpeg"
  },
  {
    "id": 64,
    "category_id": 4,
    "subcategory_id": 7,
    "name_da": "Frost Jomfruhummerhaler",
    "price": 150,
    "unit": null,
    "image": "Frost/Jomfruhummerhaler.jpeg"
  },
  {
    "id": 65,
    "category_id": 4,
    "subcategory_id": 7,
    "name_da": "Frost Hummer",
    "price": 0.35,
    "unit": "g",
    "image": "Hel fisk/Hummer.jpeg"
  },
  {
    "id": 66,
    "category_id": 3,
    "name_da": "Røget Kryddermakrel",
    "price": 30,
    "unit": null,
    "image": "Røget fisk/Røget Kryddermakrel.jpeg"
  },

  {
    "id": 69,
    "category_id": 3,
    "name_da": "Kold Røget Laks",
    "price": 0.45,
    "unit": "g",
    "image": "Røget fisk/Kold røget laks.jpeg"
  },
  {
    "id": 70,
    "category_id": 3,
    "name_da": "Kold Røget Hellefisk",
    "price": 0.4,
    "unit": "g",
    "image": "Røget fisk/Kold røget hellefisk.jpeg"
  },
  {
    "id": 71,
    "category_id": 3,
    "name_da": "Røget Skalrejer",
    "price": 0.22,
    "unit": "g",
    "image": "Røget fisk/Røget skalrejer.jpeg"
  },
  {
    "id": 72,
    "category_id": 3,
    "name_da": "Røget Hajbug",
    "price": 0,
    "unit": null,
    "image": "Røget fisk/Røget Hajbug.jpeg"
  },
  {
    "id": 73,
    "category_id": 3,
    "name_da": "Røget Smørfisk",
    "price": 0.35,
    "unit": "g",
    "image": "Røget fisk/Røget Smørfisk.jpeg"
  },
  {
    "id": 74,
    "category_id": 3,
    "name_da": "Røget Hornfisk",
    "price": 25,
    "unit": null
  },
  {
    "id": 75,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Rosé Rejer",
    "price": 0.25,
    "unit": "g",
    "image": "Misc/Rose rejer.jpeg"
  },
  {
    "id": 76,
    "category_id": 4,
    "subcategory_id": 9,
    "name_da": "Østers Åben",
    "price": 20,
    "unit": null,
    "image": "Misc/Østers åben.jpeg"
  },
  {
    "id": 77,
    "category_id": 4,
    "subcategory_id": 9,
    "name_da": "Østers",
    "price": 15,
    "unit": null,
    "image": "Misc/Østers.jpeg"
  },

  {
    "id": 79,
    "category_id": 2,
    "subcategory_id": 4,
    "name_da": "Laksefrikadelle",
    "price": 18,
    "unit": null,
    "image": "Frikadelle og Fiskfilet/Laksefrikadelle.jpeg"
  },

  {
    "id": 81,
    "category_id": 7,
    "name_da": "Kartoffelrejer",
    "price": 7,
    "unit": null,
    "image": "Friture rejer/Kartoffelrejer.jpeg"
  },

  {
    "id": 83,
    "category_id": 7,
    "name_da": "Krabbekugler",
    "price": 7,
    "unit": null,
    "image": "Friture rejer/Krabbekugler.jpeg"
  },

  {
    "id": 85,
    "category_id": 7,
    "name_da": "Tempura Rejer",
    "price": 7,
    "unit": null,
    "image": "Friture rejer/Tempura Rejer.jpeg"
  },

  {
    "id": 89,
    "category_id": 9,
    "name_da": "Honning",
    "price": 0,
    "unit": null,
    "image": "Misc/Honning.jpeg"
  },
  {
    "id": 90,
    "category_id": 9,
    "name_da": "Citron",
    "price": 7,
    "unit": null,
    "image": "Misc/Citron.jpeg"
  },
  {
    "id": 91,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Kylling med pommes",
    "price": 110,
    "unit": null
  },
  {
    "id": 92,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Kylling med kartoffel",
    "price": 110,
    "unit": null
  },


  {
    "id": 96,
    "category_id": 6,
    "name_da": "Fiskefars 500g",
    "price": 50,
    "unit": null,
    "image": "Salat/Fiskefars.jpeg"
  },
  {
    "id": 97,
    "category_id": 5,
    "name_da": "Gluten og laktose fri fiskefrikadeller",
    "price": 60,
    "unit": null
  },
  {
    "id": 98,
    "category_id": 4,
    "subcategory_id": 6,
    "name_da": "Frost Krabbekløer",
    "price": 0.1,
    "unit": "g",
    "image": "Hel fisk/Krabbeklør.jpeg"
  },

  {
    "id": 100,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Torskefilet",
    "price": 0.25,
    "unit": "g",
    "image": "Fiskefilet/Torskefilet.jpeg"
  },
  {
    "id": 101,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Torskeloins",
    "price": 0.25,
    "unit": "g",
    "image": "Hel fisk/Torskeloins.jpeg"
  },
  {
    "id": 102,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Torsk - hel fisk",
    "price": 0.8,
    "unit": "g",
    "image": "Hel fisk/Torsk.jpeg"
  },
  {
    "id": 103,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Renset Stenbiderrogn",
    "price": 0.45,
    "unit": "g"
  },
  {
    "id": 104,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Urenset Stenbiderrogn",
    "price": 0.35,
    "unit": "g"
  },
  {
    "id": 105,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Langeloins",
    "price": 0.22,
    "unit": "g",
    "image": "Hel fisk/Langeloins.jpeg"
  },
  {
    "id": 106,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Langefilet",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 107,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Rødspætter",
    "price": 0.25,
    "unit": "g",
    "image": "Hel fisk/Rødspætter.jpeg"
  },
  {
    "id": 108,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Rødspættefilet",
    "price": 0.33,
    "unit": "g",
    "image": "Fiskefilet/Rødspættefilet.jpeg"
  },
  {
    "id": 109,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Kulmuleloins",
    "price": 0.25,
    "unit": "g"
  },
  {
    "id": 110,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Kulmulefilet",
    "price": 0.22,
    "unit": "g",
    "image": "Fiskefilet/Kulmulefilet.jpeg"
  },
  {
    "id": 111,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Skrubber",
    "price": 0.15,
    "unit": "g",
    "image": "Hel fisk/Skrubber.jpeg"
  },
  {
    "id": 112,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Fjordskrubber",
    "price": 0.2,
    "unit": "g",
    "image": "Hel fisk/Skrubber.jpeg"
  },
  {
    "id": 113,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "kg skrubber",
    "price": 100,
    "unit": null,
    "image": "Hel fisk/Skrubber.jpeg"
  },
  {
    "id": 114,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Brosmeloins",
    "price": 0.28,
    "unit": "g",
    "image": "Hel fisk/Brosmeloins.jpeg"
  },
  {
    "id": 115,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Brosmefilet",
    "price": 0.28,
    "unit": "g"
  },
  {
    "id": 116,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Laksefilet",
    "price": 0.3,
    "unit": "g",
    "image": "Fiskefilet/Laksefilet.jpeg"
  },
  {
    "id": 117,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Laksesteak",
    "price": 80,
    "unit": null
  },
  {
    "id": 118,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Havtaske haler",
    "price": 0.3,
    "unit": "g"
  },
  {
    "id": 119,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Havtaskekæber",
    "price": 0.3,
    "unit": "g"
  },
  {
    "id": 120,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Havtaskefilet",
    "price": 0.35,
    "unit": "g",
    "image": "Fiskefilet/Havtaskefilet.jpeg"
  },
  {
    "id": 121,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Havtaske - hel fisk",
    "price": 0.35,
    "unit": "g"
  },
  {
    "id": 122,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Rødtunge - hel fisk",
    "price": 0.25,
    "unit": "g"
  },
  {
    "id": 123,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Rødtungefilet",
    "price": 0.33,
    "unit": "g",
    "image": "Fiskefilet/Rødtungefilet.jpeg"
  },
  {
    "id": 124,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Havkatfilet",
    "price": 0.25,
    "unit": "g"
  },
  {
    "id": 125,
    "category_id": 4,
    "subcategory_id": 8,
    "name_da": "1kg Fersk Blåmuslinger",
    "price": 50,
    "unit": null,
    "image": "Hel fisk/Blåmuslinger.jpeg"
  },
  {
    "id": 126,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Ising",
    "price": 0,
    "unit": "g"
  },
  {
    "id": 127,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Isingfilet",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 128,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Multe - helfisk",
    "price": 0,
    "unit": "g"
  },
  {
    "id": 129,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Multefilet",
    "price": 0.25,
    "unit": "g"
  },
  {
    "id": 130,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Makrel - helfisk",
    "price": 0.12,
    "unit": "g",
    "image": "Hel fisk/Makrel.jpeg"
  },
  {
    "id": 131,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Makrelfilet",
    "price": 0.18,
    "unit": "g"
  },
  {
    "id": 132,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Helleflynderfilet",
    "price": 0.3,
    "unit": "g",
    "image": "Fiskefilet/Helleflynderfilet.jpeg"
  },
  {
    "id": 133,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Helleflynder - helfisk",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 134,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Sild - helfisk",
    "price": 0,
    "unit": "g"
  },
  {
    "id": 135,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Sildefilet",
    "price": 0.08,
    "unit": "g"
  },
  {
    "id": 136,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Hornfisk - helfisk",
    "price": 0.08,
    "unit": "g",
    "image": "Hel fisk/Hornfisk.jpeg"
  },
  {
    "id": 137,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Hornfiskfilet",
    "price": 0.25,
    "unit": "g",
    "image": "Fiskefilet/Hornfiskfilet.jpeg"
  },
  {
    "id": 138,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Mørksejloins",
    "price": 0.18,
    "unit": "g"
  },
  {
    "id": 139,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Mørksejfilet",
    "price": 0.18,
    "unit": "g",
    "image": "Fiskefilet/Mørksejfilet.jpeg"
  },
  {
    "id": 140,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Lyssejfilet",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 141,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Lyssejloins",
    "price": 0,
    "unit": "g"
  },
  {
    "id": 142,
    "category_id": 4,
    "subcategory_id": 6,
    "name_da": "Fersk Krabbekløer",
    "price": 0.15,
    "unit": "g",
    "image": "Hel fisk/Krabbeklør.jpeg"
  },
  {
    "id": 145,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Smørfisk - Escobar",
    "price": 0.22,
    "unit": "g"
  },
  {
    "id": 146,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Pighvar",
    "price": 0.28,
    "unit": "g",
    "image": "Hel fisk/Pighvar.jpeg"
  },
  {
    "id": 147,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Slethvar",
    "price": 0.15,
    "unit": "g",
    "image": "Hel fisk/Slethvar.jpeg"
  },
  {
    "id": 148,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Kullerloins",
    "price": 0.25,
    "unit": "g",
    "image": "Hel fisk/Kullerloins.jpeg"
  },
  {
    "id": 149,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Kullerfilet",
    "price": 0.19,
    "unit": "g"
  },
  {
    "id": 150,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Havkat - helfisk",
    "price": 0,
    "unit": "g"
  },
  {
    "id": 151,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Havbars",
    "price": 0.16,
    "unit": "g"
  },
  {
    "id": 152,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Rødfiskfilet",
    "price": 0.32,
    "unit": "g"
  },
  {
    "id": 153,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Håndpillede rejer Lille",
    "price": 35,
    "unit": null,
    "image": "Salat/Håndpillede rejer.jpeg"
  },
  {
    "id": 154,
    "category_id": 8,
    "subcategory_id": 10,
    "name_da": "Sports cola",
    "price": 25,
    "unit": null,
    "image": "Drikkevarer/Sports cola.jpeg"
  },
  {
    "id": 155,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Torskerogn",
    "price": 0.25,
    "unit": "g"
  },




  {
    "id": 162,
    "category_id": 9,
    "name_da": "Håndpillede rejer",
    "price": 240,
    "unit": "stk"
  },



  {
    "id": 173,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Skrubbefilet",
    "price": 0.25,
    "unit": "g"
  },

  {
    "id": 175,
    "category_id": 2,
    "subcategory_id": 3,
    "name_da": "Lille pommes",
    "price": 35,
    "unit": null,
    "image": "Menu/1 fiskefilet mlille pommes.jpeg"
  },
  {
    "id": 176,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Hvidløgsrejer",
    "price": 50,
    "unit": null,
    "image": "Salat/Hvidløgsrejer.jpeg"
  },

  {
    "id": 178,
    "category_id": 6,
    "name_da": "Blæksprutte salat",
    "price": 50,
    "unit": null,
    "image": "Salat/Blæksprutte salat.jpeg"
  },
  {
    "id": 179,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Frost Sort Tiger rejer",
    "price": 250,
    "unit": null,
    "image": "Frost/Black tiger rejer.jpeg"
  },
  {
    "id": 180,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Moonfisk",
    "price": 0.2,
    "unit": "g",
    "image": "Hel fisk/Moonfisk.jpeg"
  },
  {
    "id": 181,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Vin flaske",
    "price": 200,
    "unit": null,
    "image": "Drikkevarer/Vin flaske.jpeg"
  },
  {
    "id": 182,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Vin glas",
    "price": 70,
    "unit": null,
    "image": "Drikkevarer/Vin glas.jpeg"
  },
  {
    "id": 183,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Stor øl",
    "price": 60,
    "unit": null
  },
  {
    "id": 184,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Lille øl",
    "price": 35,
    "unit": null
  },
  {
    "id": 185,
    "category_id": 4,
    "subcategory_id": 7,
    "name_da": "Frost Languster",
    "price": 0.25,
    "unit": "g",
    "image": "Frost/Languster.jpeg"
  },
  {
    "id": 186,
    "category_id": 7,
    "name_da": "Twister rejer",
    "price": 8,
    "unit": null,
    "image": "Friture rejer/Twister rejer.jpeg"
  },



  {
    "id": 190,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Blålangeloins",
    "price": 0.22,
    "unit": "g",
    "image": "Hel fisk/Langeloins.jpeg"
  },
  {
    "id": 191,
    "category_id": 5,
    "name_da": "Stenbiderogn 200gr",
    "price": 50,
    "unit": "none"
  },

  {
    "id": 193,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Stor Samsø snap",
    "price": 220,
    "unit": null,
    "image": "Drikkevarer/Samsø snaps stor.jpeg"
  },
  {
    "id": 194,
    "category_id": 8,
    "subcategory_id": 11,
    "name_da": "Lille Samsø snap",
    "price": 135,
    "unit": null,
    "image": "Drikkevarer/Samsø snaps lille.jpeg"
  },
  {
    "id": 195,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Ål",
    "price": 0.5,
    "unit": "g"
  },

  {
    "id": 197,
    "category_id": 6,
    "name_da": "Laksemousse",
    "price": 25,
    "unit": null,
    "image": "Salat/Laksemousse.jpeg"
  },
  {
    "id": 198,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Lakseørred",
    "price": 0.18,
    "unit": "g"
  },
  {
    "id": 199,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Rødfisk",
    "price": 0.16,
    "unit": "g"
  },
  {
    "id": 200,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Fjeasing",
    "price": 0.12,
    "unit": "g"
  },
  {
    "id": 201,
    "category_id": 6,
    "name_da": "Sardin",
    "price": 40,
    "unit": null
  },
  {
    "id": 202,
    "category_id": 9,
    "name_da": "Kaviar",
    "price": 300,
    "unit": null,
    "image": "Misc/Kaviar.jpg"
  },
  {
    "id": 203,
    "category_id": 5,
    "name_da": "Ål",
    "price": 0.5,
    "unit": "g"
  },

  {
    "id": 205,
    "category_id": 4,
    "subcategory_id": 8,
    "name_da": "Kammuslinger",
    "price": 400,
    "unit": null
  },
  {
    "id": 206,
    "category_id": 6,
    "name_da": "Fiskesennep",
    "price": 20,
    "unit": null,
    "image": "Salat/Fiskesennup.jpeg"
  },
  {
    "id": 207,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Frost Rapuja",
    "price": 200,
    "unit": null,
    "image": "Frost/Rapuja.jpeg"
  },
  {
    "id": 208,
    "category_id": 6,
    "name_da": "Remoulade lille 100 gr",
    "price": 20,
    "unit": null,
    "image": "Salat/Remoulade lille.jpeg"
  },
  {
    "id": 209,
    "category_id": 6,
    "name_da": "Remoulade stor 200 gr",
    "price": 30,
    "unit": null,
    "image": "Salat/Remoulade stor.jpeg"
  },
  {
    "id": 210,
    "category_id": 9,
    "name_da": "Kaluga Kaviar",
    "price": 400,
    "unit": null,
    "image": "Misc/Kaluga kaviar.jpeg"
  },
  {
    "id": 211,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Rokkevinde",
    "price": 0.1,
    "unit": null,
    "image": "Hel fisk/Rokkevinge.jpeg"
  },
  {
    "id": 212,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Frost Seafood cocktail",
    "price": 150,
    "unit": null,
    "image": "Frost/Seafood coctail.jpeg"
  },
  {
    "id": 213,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Jomfruhummer (Hele)",
    "price": 0.2,
    "unit": "kg"
  },
  {
    "id": 214,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Stor 200 gr Reje/Skaldyr salat",
    "price": 50,
    "unit": null,
    "image": "Salat/Skaldyr salat stor.jpeg"
  },
  {
    "id": 215,
    "category_id": 4,
    "subcategory_id": 5,
    "name_da": "Lille Skaldyr /reje salat 100gr",
    "price": 30,
    "unit": null,
    "image": "Salat/Skaldyr salat lille.jpeg"
  },
  {
    "id": 216,
    "category_id": 1,
    "subcategory_id": 1,
    "name_da": "Multe",
    "price": 20,
    "unit": null,
    "image": "Hel fisk/Grey mullet.jpeg"
  },

  {
    "id": 218,
    "category_id": 1,
    "subcategory_id": 2,
    "name_da": "Blålangefilet",
    "price": 0.24,
    "unit": "g"
  }
];
