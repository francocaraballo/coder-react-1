export async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

// Cambiar  a fetch
export async function getProductById(id) {
  return await axios.get(`'https://dummyjson.com/products'/${id}`);
}