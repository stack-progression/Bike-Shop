import React from 'react'
import NewModel from '../Components/NewModel/NewModel'
import "./CSS/Home.css"
import ShopCategory from '../Components/ShopCategory/ShopCategory'
import Brands from '../Components/Brands/Brands'

const Home = () => {
  return (
    <div className='home'>
      <NewModel />
      <ShopCategory />
      <Brands />
    </div>
  )
}

export default Home
