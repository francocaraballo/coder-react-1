import { useGetProductById } from "../hooks";
import { useParams } from "react-router-dom";


import { ItemDetailsContainer } from '../components'


export function ItemDetails() {
  const { id } = useParams();
  const { product, loading, error } = useGetProductById(id);

  return (
    <>
      <ItemDetailsContainer product={ product } />
    </>
  )
}
