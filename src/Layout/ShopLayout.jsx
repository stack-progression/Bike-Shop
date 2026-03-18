import React from 'react'
import "./CSS/ShopLayout.css"
import { Outlet } from 'react-router-dom'
import FilterProducts from '../Components/FilterProducts/FilterProducts'

const ShopLayout = () => {
  return (
    <div className='shop-layout'>
      <Outlet />
      <FilterProducts />
    </div>
  )
}

export default ShopLayout
