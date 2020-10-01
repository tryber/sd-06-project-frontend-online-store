export async function getCategories() {
  const api = 'https://api.mercadolibre.com/';
  const endpoint = 'sites/MLB/categories';
  const requestURL = `${api}${endpoint}`;
  const categoriesPromise = await fetch(requestURL);

  return categoriesPromise.json();
}

export async function getProductsFromCategoryAndQuery(query, categoryId = undefined) {
  const api = 'https://api.mercadolibre.com/';
  const endpoint = categoryId
    ? `sites/MLB/search?category=${categoryId}&q=${query}`
    : `sites/MLB/search?q=${query}`;
  const requestURL = `${api}${endpoint}`;
  const queryPromise = await fetch(requestURL);

  return queryPromise.json();
}
