import React from 'react'
import { Link } from 'react-router-dom'

export const LinksItems = () => {
  return (
    <>
      <Link to={'/'}>Home</Link>
      <Link to={'/products'}>Products</Link>

      {/* Cambiar para usar las categorias */}
      <Link to={'/products/:id'}>Categories</Link>
    </>
  )
}

