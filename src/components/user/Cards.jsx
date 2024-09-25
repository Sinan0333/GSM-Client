import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
// const arr = [1,2,3,4,5,6,7,8,9,10]

function Cards({products,expBtn,title}) {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center'>
      {title && <h1 className='text-3xl font-bold '><span className='text-blue-500'>Explore</span> Our Products</h1>}
        <div className=' mx-3 sm:mx-10 my-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
              products.map((product)=>(
                <Card key={product._id} id={product._id} name={product.name} price={product.price} image={product.image}/>
              ))
            }
        </div>
        <div className='flex justify-center'>
            {expBtn && <button onClick={()=>navigate('/products')}  className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition'>Explore More</button>}
        </div>
    </div>
  )
}

export default Cards
