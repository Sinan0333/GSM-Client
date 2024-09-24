import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/admin/Sidebar'
import Navbar from '../components/admin/Navbar'
import Dashboard from '../pages/admin/Dashboard'
import AddProduct from '../pages/admin/AddProduct'
import ListProducts from '../pages/admin/ListProducts'
import EditProduct from '../pages/admin/EditProduct'

function AdminRoutes() {
  return (
    <div className="flex h-screen bg-gray-100">
        <Sidebar/>
        <div className="flex-1 flex flex-col w-screen">
          <Navbar />
          <div className="p-2 md:p-4 w-full overflow-y-auto ">
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/products" element={<ListProducts/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path='/products/add' element={<AddProduct/>}/>
              <Route path='/products/edit/:id' element={<EditProduct/>}/>
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default AdminRoutes
