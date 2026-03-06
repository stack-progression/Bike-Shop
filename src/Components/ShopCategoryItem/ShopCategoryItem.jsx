import React from 'react'
import "./ShopCategoryItem.css"
import { Link } from 'react-router-dom'

const ShopCategoryItem = (i) => {
  return (
    <Link to={`/category/${i.id}`} className='shop-category-items'>
      <img src={i.img} alt={i.name} />
      <p>{i.name}</p>
    </Link>
  )
}

export default ShopCategoryItem
