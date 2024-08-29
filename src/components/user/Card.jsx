import React from 'react'

function Card() {
  return (
    <div className="max-w-80 w-full bg-white rounded-lg shadow-lg overflow-hidden ">
        <div>
            <img className="object-cover h-64 w-full" src="/images/amt.jpg" alt="Converse sneakers" />
        </div>

        <div className="flex flex-col gap-1 mt-4 px-4 mb-2 text-center">
            <h2 className="text-lg font-semibold text-gray-800 ">Converse Sneakers</h2>
            <span className="font-semibold text-gray-800  text-lg">$60</span>
        </div>
    </div>
  )
}

export default Card
