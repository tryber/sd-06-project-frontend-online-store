export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const obj = await response.json();
  return obj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let url = '';
  if (categoryId === undefined && query === undefined) {
    url = 'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
  }
  if (categoryId === undefined && query !== undefined) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=${query}`;
  }
  if (categoryId !== undefined && query === undefined) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=$QUERY`;
  }
  if (categoryId !== undefined && query !== undefined) {
    url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }
  const answer = await fetch(url);
  const objson = await answer.json();
  return objson;
}
