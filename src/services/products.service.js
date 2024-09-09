export async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    return products;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json()
    return data;
    
  } catch (error) {
    console.log(error)
  }
} 
