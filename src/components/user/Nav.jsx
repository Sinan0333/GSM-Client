import React, { useContext, useState } from 'react'
import { BannerWidth } from '../../routes/UserRoutes'
import { useNavigate } from 'react-router-dom'

function Nav() {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()
  const {width,setWidth} = useContext(BannerWidth)

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
    <div>
        <nav
      className="fixed top-2 z-50 w-full  px-4 py-2 mx-auto text-black bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <a onClick={()=>navigate('/')}
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased group">
          <span className='text-2xl font-bold group-hover:text-blue-500 transition duration-700'>GSM</span> <span className='text-2xl font-bold text-blue-500 group-hover:text-black transition duration-700'>NESI</span>
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li onClick={()=>navigate('/')} className="block py-2 px-3 text-gray-900 rounded cursor-pointer font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a  className="flex items-center">
                Home
              </a>
            </li>
            <li onClick={()=>navigate('/products')} className="block py-2 px-3 text-gray-900 rounded cursor-pointer font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a  className="flex items-center">
                Products
              </a>
            </li>
            <li onClick={scrollToServices} className="block py-2 px-3 text-gray-900 rounded cursor-pointer font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a  className="flex items-center">
                Services
              </a>
            </li>
            <li onClick={()=>navigate('/coming-soon')} className="block py-2 px-3 text-gray-900 rounded cursor-pointer font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a  className="flex items-center">
                About
              </a>
            </li>
            <li onClick={handleWhatsAppRedirect} className="block py-2 px-3 text-gray-900 rounded cursor-pointer font-medium hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <a  className="flex items-center">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="flex items-center gap-x-1">
          <button
            className="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Log In</span>
          </button>
          <button
            className="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button">
            <span>Sign in</span>
          </button>
        </div> */}
        <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)}
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav> 

    <div className={`${isSidebarOpen ? 'block' : 'hidden'} z-40 fixed top-0 bottom-0 right-0 w-60 bg-white `}>

    </div>
    </div>
  )
}

export default Nav
