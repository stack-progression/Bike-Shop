import React from 'react'
import "./MiddleSectionFooter.css"
import {useCategories} from "../../Hooks/useCategories"
import {useBrands} from "../../Hooks/useBrands"
import { Link } from 'react-router-dom'

const MiddleSectionFooter = () => {
    const {data: category, isPending: categoryLoading} = useCategories();
    const {data: brands, isPending: brandsLoading} = useBrands();
    if(categoryLoading || brandsLoading) return "Loading..."
  return (
    <div>
      <div className='category-footer'>
        <h2>Categorii</h2>
        <Link to="/category/all">Biciclete</Link>
        {
            category.map((item)=>{
                return(
                    <Link to={`category/${item.slug}`}>{item.name}</Link>
                )
            })
        }
        {
            brands.map((item)=>{
                return(
                    <Link to={`category/${item.slug}`}>{item.name}</Link>
                )
            })
        }
      </div>
      <div className='brands-footer'>
        {

        }
      </div>
    </div>
  )
}

export default MiddleSectionFooter
