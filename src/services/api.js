export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  const allCategories = await fetch(endpoint).then((r) => r.json());

  return allCategories;
}

// 

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
