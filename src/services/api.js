export async function getCategories() {
  const endpoint = { api: 'https://api.mercadolibre.com/sites/MLB/categories' };
  const response = await fetch(endpoint.api);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  if (categoryId === '') {
    apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=';
    const response = await fetch(`${apiUrl}$${query}`);
    const data = await response.json();
    return data;
  }
  const response = await fetch(`${apiUrl}${categoryId}&q=${query}`);
  const data = await response.json();
  return data;
}
