import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const useItemsCollection = ( collectionName ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const dataCollection = collection(db, collectionName)
    getDocs(dataCollection)
      .then((snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setData(fetchedData)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [collectionName]);

  return { data, loading, error }
}