export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(query) {
  const response = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)).json();
  return response;
}

export async function getProduct(id) {
  const product = await (await fetch(`https://api.mercadolibre.com/items/${id}`)).json();
  return product;
}
