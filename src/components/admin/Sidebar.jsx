import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      <div className="md:hidden fixed right-2 mt-1 z-10 flex justify-end p-4">
        <button onClick={toggleSidebar} className="focus:outline-none text-gray-700 text-2xl">
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-20 bg-white w-64 min-h-screen   p-4 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 `}
      >
         <h2 className='mb-8 text-center'><span className='group cursor-default'> <span className='text-3xl font-bold group-hover:text-blue-500 transition duration-700'>GSM</span> <span className='text-3xl font-bold text-blue-500 group-hover:text-black transition duration-700'>NESI</span></span></h2>
        <div className='w-full flex-col justify-center '>
          <button onClick={() => navigate('/admin')} type="button" className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Dashboard
          </button>
          <button onClick={() => navigate('/admin/users')} type="button" className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Users
          </button>
          <button onClick={() => navigate('/admin/products')} type="button" className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
            Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
