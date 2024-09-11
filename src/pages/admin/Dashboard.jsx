import React from 'react'

function Dashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example of a card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-xl mb-2">Total Users</div>
            <p className="text-gray-700">1,024</p>
          </div>
    
          {/* Example of another card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-xl mb-2">Active Users</div>
            <p className="text-gray-700">512</p>
          </div>
    
          {/* Another example card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="font-semibold text-xl mb-2">New Sign-ups</div>
            <p className="text-gray-700">30</p>
          </div>
        </div>
      );
}

export default Dashboard
