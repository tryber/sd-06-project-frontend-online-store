export async function getCategories() {
  const object = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await object.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const object = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await object.json();
  return response;
}
