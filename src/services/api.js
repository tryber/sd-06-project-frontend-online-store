export function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url)
    .then((response) => response.json());
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url)
    .then((response) => response.json());
}


export default getProductsFromCategoryAndQuery;
