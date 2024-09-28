import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/admin/Login'
import { AdminIsLoggedOut } from '../components/common/ProtectRoute'

function AuthRoute() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<AdminIsLoggedOut><Login/></AdminIsLoggedOut>}/>
      </Routes>
    </div>
  )
}

export default AuthRoute
