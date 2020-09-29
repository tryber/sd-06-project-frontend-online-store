export async function getCategories() {
  const urlEndPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const request = fetch(urlEndPoint)
    .then((response) => response.json());
  return request;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  const urlEndpointIdAndQuery = 'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
  const request = fetch(urlEndpointIdAndQuery)
    .then((response) => response.json());
  return request;
}
