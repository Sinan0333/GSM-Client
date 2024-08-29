import React from 'react'

function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md">
          <div className="text-lg font-semibold">Dashboard</div>
          <div className="flex items-center">
            <div className="ml-4 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold">Naseem</span>
            </div>
          </div>
        </div>
      );
}

export default Navbar
