import React from 'react'

function Offer() {
  return (
    <section className="px-3 py-5 border shadow-md lg:py-10 mb-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
                <p className="text-4xl font-bold md:text-7xl text-blue-500">25% OFF</p>
                <p className="text-4xl font-bold md:text-7xl uppercase">unlock tool</p>
                <p className="mt-2 text-sm md:text-lg uppercase">12 hours later can change pc</p>
                <button className="text-lg md:text-2xl border border-blue-500 hover:bg-blue-500 hover:text-white duration-500 transition text-blue-500 py-2 px-5 mt-10 ">Shop Now</button>
            </div>
            <div className="order-1 lg:order-2">
                <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" src="/images/amt.jpg" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Offer
