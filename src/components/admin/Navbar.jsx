import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/auth/login")
  }
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md ">
          <div className=" md:mr-0 flex items-center">
            <div className="ml-4 flex items-center space-x-2">
              <img
                src="/images/user-avatar.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold">Naseem</span>
            </div>
          </div>
          <button onClick={handleLogout} className='border border-blue-500 mr-10 md:mr-0 text-black font-semibold px-6 py-2 rounded-md hover:bg-blue-500 hover:text-white transition'>Logout</button>
        </div>
      );
}

export default Navbar
