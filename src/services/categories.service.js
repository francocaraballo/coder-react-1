export async function getCategories() {
  const res = await fetch('https://dummyjson.com/products/categories');
  return await res.json();
}

export async function getProductsByCategory(category) {
  try {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await res.json();
    return data; 
  } catch (error) {
    console.log(error)
  }
}