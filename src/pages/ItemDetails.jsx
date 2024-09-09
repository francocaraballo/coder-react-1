import { useProduct } from "../hooks";
import { useParams } from "react-router-dom";


import { ItemDetailsContainer } from '../components'


export function ItemDetails() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);

  return (
    <>
      <ItemDetailsContainer product={ product } />
    </>
  )
}
