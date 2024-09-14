import React from 'react'
import Card from './Card'
const arr = [1,2,3,4,5,6,7,8,9,10]

function Cards() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold '><span className='text-blue-500'>Explore</span> Our Products</h1>
        <div className=' mx-3 sm:mx-10 my-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
              arr.map((val)=>(
                <Card key={val} />
              ))
            }
        </div>
        <div className='flex justify-center'>
            <button className='bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition'>Explore More</button>
        </div>
    </div>
  )
}

export default Cards
