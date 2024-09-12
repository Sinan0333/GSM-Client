import React, { useEffect, useState } from 'react'
import { blockProductApi, fetchAllProducts } from '../../api/admin/productApi'
import { useNavigate } from 'react-router-dom'

function ListProducts() {
    const navigate = useNavigate()
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetchAllProducts().then((res)=>setProducts(res.products))
    },[])

    const handleBlock = async(id,is_blocked)=>{
        blockProductApi(id,is_blocked).then((res)=>{
            fetchAllProducts().then((res)=>setProducts(res.products))
        })
    }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th onClick={()=>navigate('/admin/products/add')} scope="col" className="px-6 py-3 text-right cursor-pointer text-blue-500">
                        Add Product
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product)=>(
                        <tr key={product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {product.name}
                            </th>
                            <td className="px-6 py-4">
                                {product.quantity}
                            </td>
                            <td className="px-6 py-4">
                                {product.category}
                            </td>
                            <td className="px-6 py-4">
                                {product.price}
                            </td>
                            <td className="px-6 py-4 text-right ">
                                <a  className="cursor-pointer font-medium text-blue-600  hover:underline mr-2">Edit</a>
                                {product.is_blocked ? <a onClick={()=>handleBlock(product._id,false)} className="cursor-pointer font-medium text-lime-500  hover:underline">Unblock</a> : <a onClick={()=>handleBlock(product._id,true)} className="cursor-pointer font-medium text-red-600  hover:underline">Block</a>}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListProducts
