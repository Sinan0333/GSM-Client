import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import Navbar from '../components/admin/Navbar'
import List from '../components/admin/List'
import Dashboard from '../components/admin/Dashboard'
import AddProduct from '../components/admin/AddProduct'

function AdminRoutes() {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-2 md:p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/products" element={<List/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path='/add-product' element={<AddProduct/>}/>
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default AdminRoutes
