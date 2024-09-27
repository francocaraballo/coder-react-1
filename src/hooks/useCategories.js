import { useItemsCollection } from './useItemsCollection';

export function useCategories(category) {
  const { data, loading } = useItemsCollection('products');

  const productsByCategory = data.filter(product => product.category === category)

  return { productsByCategory, loading }
}

