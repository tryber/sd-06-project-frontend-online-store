export async function getCategories() {
  const endpoint = {api: 'https://api.mercadolibre.com/sites/MLB/categories'};

  let response = await fetch(endpoint.api);
  let data = await response.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/search?category=';

  let response = await fetch(`${apiUrl}${categoryId}&q=${query}`);
  let data = await response.json();

  return data;
}
