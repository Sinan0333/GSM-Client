import React, { useState } from 'react'

function QuantityInput({totalStock,quantity,setQuantity}) {
    
    const handleIncrement = () => {
        if(quantity < totalStock){
            setQuantity(quantity + 1)
        }
    }

    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

  return (
    <form className="w-1/2 h-full">
        <div className="relative flex items-center ">
            <button onClick={handleDecrement} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-blue-500  hover:bg-blue-600   p-3 h-11 focus:ring-gray-100 focus:outline-none">
                <svg className="w-3 h-3 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                </svg>
            </button>
            <input type="text" value={quantity} disabled name="quantity"  id="quantity-input" data-input-counter data-input-counter-min="1" data-input-counter-max="50" aria-describedby="helper-text-explanation" className=" border-x-0 border-blue-500  h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
            <button onClick={handleIncrement} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-blue-500  hover:bg-blue-600  p-3 h-11 focus:ring-gray-100 focus:outline-none">
                <svg className="w-3 h-3 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                </svg>
            </button>
        </div>
    </form>
  )
}

export default QuantityInput
