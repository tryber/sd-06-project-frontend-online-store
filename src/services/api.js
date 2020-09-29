
export function getCategories() {
  const urlApi = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(urlApi)
    .then((response) => response.json())
}

export function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`

  return fetch(endpoint)
    .then((response) => response.json())
}
