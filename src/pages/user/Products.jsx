import React, { useEffect, useState } from 'react'
import Offer from '../../components/user/Offer'
import { fetchAllProducts } from '../../api/user/productApi'
import Cards from '../../components/user/Cards'

function Products() {
    const [products,setProducts] = useState([])

    useEffect(()=>{
      fetchAllProducts().then((res)=>setProducts(res.products))
    },[])

  return (
    <div>
      <Offer/>
      <Cards products={products} />
    </div>
  )
}

export default Products
