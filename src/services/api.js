const endpoint = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const requestReturn = await fetch(`${endpoint}/categories`);
  const requestObject = await requestReturn.json();
  return requestObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `${endpoint}/search?category=${categoryId}&q=${query}`;
  const requestReturn = await fetch(url);
  const requestObject = await requestReturn.json();
  return requestObject;
}
