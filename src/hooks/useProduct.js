import { useEffect, useState } from 'react'
import { getProductById } from '../services'

export function useProduct(id) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    getProductById(id)
      .then( data => {
        setProduct(data);
      })
      .catch(console.log)
      .finally(setLoading(false))
  }, [id]);

  return { product, loading }
}
