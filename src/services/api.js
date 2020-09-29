const url = { base: 'https://api.mercadolibre.com/sites/MLB/' };

export async function getCategories() {
  const fecthData = await fetch(`${url.base}categories`);
  const data = await fecthData.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let params;

  if (categoryId && query) {
    params = `search?category=${categoryId}_ID&q=${query}`;
  } else if (categoryId) {
    params = `search?category=${categoryId}`;
  } else if (query) {
    params = `search?q=${query}`;
  }

  const fecthData = await fetch(`${url.base}${params}`);
  const data = await fecthData.json();
  return data;
}
