export async function getCategories() {
  const baseAPI = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchCategories = await fetch(baseAPI).then((response) => response.json());

  return fetchCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchCategoryAndQuery = await fetch(url).then((response) => response.json());

  return fetchCategoryAndQuery;
}
