import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { db } from '../firebase';


export const useGetProductById = ( id ) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() =>{
    const dataCollection = doc(db, 'products', id);
    getDoc(dataCollection)
      .then((snapshot) => setProduct({ id: snapshot.id, ...snapshot.data() }))
      .catch(() => {
        setError(true)
        console.log(`Ocurrio un error al buscar el ID ${id}`)
      })
      .finally(() => setLoading(false))
  }, [id]);

  return { product, loading, error }
}
