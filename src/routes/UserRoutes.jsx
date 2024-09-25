import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Nav from '../components/user/Nav'
import Products from '../pages/user/Products'
import Footer from '../components/user/Footer'
import ProductView from '../pages/user/ProductView'

export const BannerWidth = React.createContext('')

function UserRoutes() {
  const [width,setWidth] = useState(0)

  return (
    <div>
      <BannerWidth.Provider value={{width,setWidth}}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/product/:id' element={<ProductView/>}/>
        </Routes>
        <Footer/>
      </BannerWidth.Provider>
    </div>
  )
}

export default UserRoutes
