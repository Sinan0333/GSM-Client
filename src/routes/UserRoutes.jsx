import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/user/Home'
import Nav from '../components/user/Nav'

export const BannerWidth = React.createContext('')

function UserRoutes() {
  const [width,setWidth] = useState(0)

  return (
    <div>
      <BannerWidth.Provider value={{width,setWidth}}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BannerWidth.Provider>
    </div>
  )
}

export default UserRoutes
