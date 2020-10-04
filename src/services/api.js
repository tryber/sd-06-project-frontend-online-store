export async function getCategories() {
  fetch("https://api.mercadolibre.com/sites/MLB/categories")
    .then(response => response.json())
    .then(json => console.log(json));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then(response => response.json())
    .then(json => json.results)
  // .then(products => console.log(products));
}
