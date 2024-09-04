import axios from 'axios';

export async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  return await axios.get(`https://fakestoreapi.com/products/${id}`);
}