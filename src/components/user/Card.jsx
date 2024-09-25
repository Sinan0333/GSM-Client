import React from 'react'
import { useNavigate } from 'react-router-dom'
// {`${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${product.image}`}

function Card({id,name,price,image}) {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${id}`)}  className="max-w-52 sm:max-w-80 w-full bg-white rounded-lg  overflow-hidden cursor-pointer">
        <div className='mt-4'>
            <img className="object-cover h-40 w-64" src={`${import.meta.env.VITE_CLOUDINARY_BASE_URL}/${image}`} alt="Converse sneakers" />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4 mb-2 text-center">
            <h2 className="text-lg font-semibold text-gray-800 truncate">{name}</h2>
            <span className="font-semibold text-gray-800  text-lg">RS.{price}</span>
        </div>
    </div>
  )
}

export default Card
