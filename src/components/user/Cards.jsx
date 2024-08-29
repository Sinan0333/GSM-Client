import React from 'react'
import Card from './Card'


function Cards() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='mx-10 my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='flex justify-center'>
            <button className='bg-black text-white px-4 py-2 rounded-md'>Load More</button>
        </div>
    </div>
  )
}

export default Cards
