import React, { useContext, useLayoutEffect, useRef } from 'react'
import { BannerWidth } from '../../routes/UserRoutes'

function Banner() {
  const {width,setWidth} = useContext(BannerWidth)
  const bannerWithRef = useRef(null)
  
  useLayoutEffect(() => {
    setWidth(bannerWithRef.current.offsetWidth)
  },[])

  const scrollToServices = () => {
    window.scrollTo({
      top: width/2,
      behavior: 'smooth',
    })
  } 

  const handleWhatsAppRedirect = () => {
    const phoneNumber = '918606025832'; 
    const message = 'Hello, I would like to know more about your product.';
    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div ref={bannerWithRef} className="flex pt-28 flex-col max-h-screen md:flex-row items-center bg-gradient-to-r from-blue-50 to-white p-6 md:p-16">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 ">
        Explore the Future of <span className="text-blue-500">Mobile Technology</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Stay ahead with the latest mobile trends, updates, and solutions tailored for you.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button onClick={scrollToServices} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
            View Services
          </button>
          <button onClick={handleWhatsAppRedirect} className="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100 transition">
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
