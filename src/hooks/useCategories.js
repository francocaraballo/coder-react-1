import { useState, useEffect } from 'react'
import { getCategories, getProductsByCategory } from "../services";

export function useCategories(category) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [productsByCategory, setProductsByCategory] = useState([]);
   
  useEffect(() => {
    getProductsByCategory(category)
      .then(setProductsByCategory)
      .catch(console.log)
  }, [category]);

  useEffect(() => {
    getCategories()
    .then(setCategoriesList)
    .catch(console.log);
  }, []);

  return { categoriesList, productsByCategory }
}

