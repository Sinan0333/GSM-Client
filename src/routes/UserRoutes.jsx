import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Nav from '../components/user/Nav'
import Products from '../pages/user/Products'
import Footer from '../components/user/Footer'

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
        </Routes>
        <Footer/>
      </BannerWidth.Provider>
    </div>
  )
}

export default UserRoutes
