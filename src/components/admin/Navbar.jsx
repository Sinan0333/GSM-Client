import React from 'react'

function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md ">
          <div className="text-lg font-semibold">Dashboard</div>
          <div className="mr-10 md:mr-0 flex items-center">
            <div className="ml-4 flex items-center space-x-2">
              <img
                src="/images/user-avatar.jpg"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold">Naseem</span>
            </div>
          </div>
        </div>
      );
}

export default Navbar
