import React from 'react'

function Banner() {
  return (
    <div className="flex pt-28 flex-col max-h-screen md:flex-row items-center bg-gradient-to-r from-blue-50 to-white p-6 md:p-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Available to fix your <span className="text-blue-500">mobile & laptops</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum mobile repair agency to repair your iPhone& Smartphone and help to start again.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            View Services
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100 transition">
            Contact Us
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 mt-10 md:mt-0 justify-center ">
        <img
          src="/svg/banner.svg" 
          alt="Mobile Repair"
          className="w-3/4 md:w-full"
        />
      </div>
    </div>
  )
}

export default Banner
