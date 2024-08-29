import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../components/user/Home"


function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default UserRoutes
