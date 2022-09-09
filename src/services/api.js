export async function getCategories() {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function getProductById(categoryId) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  try {
    const res = await fetch(URL);
    return res.json();
  } catch (error) {
    return error;
  }
}
