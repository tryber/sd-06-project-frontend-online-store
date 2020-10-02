export async function getCategories() {
  const api = 'https://api.mercadolibre.com/';
  const endpoint = 'sites/MLB/categories';
  const requestURL = `${api}${endpoint}`;

  const categoriesPromise = await fetch(requestURL)
    .then((response) => response.json());

  return categoriesPromise;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const api = 'https://api.mercadolibre.com/';
  const endpoint = `sites/MLB/search?category=${categoryId}&q=${query}`
  const requestURL = `${api}${endpoint}`;
  const queryPromise = await fetch(requestURL);
  return queryPromise.json();
}
