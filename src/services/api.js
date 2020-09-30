export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(endpoint);
  const categoriesObject = await categories.json();
  return categoriesObject;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?';
  if (categoryId && query) {
    const products = await fetch(`${url}category=${categoryId}&q=${query}`);
    const productsObject = await products.json();
    return productsObject;
  }
  if (categoryId && query === undefined) {
    const products = await fetch(`${url}category=${categoryId}`);
    const productsObject = await products.json();
    return productsObject;
  }
  if (query && categoryId === undefined) {
    const products = await fetch(`${url}q=${query}`);
    const productsObject = await products.json();
    return productsObject;
  }
}
