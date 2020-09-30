export async function getCategories() {
  const urlEndPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = fetch(urlEndPoint)
    .then((response) => response.json())
    .catch((error) => { console.log(error); });
  return request;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlEndPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const request = fetch(urlEndPoint)
    .then((response) => response.json())
    .catch((error) => { console.log(error); });
  return request;
}
