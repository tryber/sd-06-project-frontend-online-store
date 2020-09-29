export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  const allCategories = await fetch(endpoint).then((r) => r.json());

  return allCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  const products = await fetch(endpoint).then((r) => r.json());

  return products;
}
