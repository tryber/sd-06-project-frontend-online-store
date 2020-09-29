export async function getCategories() {
  const urlEndPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = fetch(urlEndPoint)
    .then((response) => response.json());
  return request;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  return {};
}
