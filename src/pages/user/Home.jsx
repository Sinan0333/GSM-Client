import React, { useEffect, useState } from 'react'
import Banner from '../../components/user/Banner'
import Services from '../../components/user/Services'
import Offer from '../../components/user/Offer'
import Cards from '../../components/user/Cards'
import { fetchAllProducts } from '../../api/user/productApi'


function Home() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetchAllProducts().then((res)=>setProducts(res.products))
  },[])

  return (
    <div className="mt-2 relative">
      <Banner/>
      <Services/>
      {/* <Offer/> */}
      <Cards products={products} expBtn={true} title={true}/>
    </div>
  )
}

export default Home
