import React from 'react'

function Footer() {
  return (
    <footer className="bg-white py-12 shadow-xl mb-2">
    <div className="container mx-auto px-20  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4">

      <div className="mb-8 lg:mb-0">
        <h2 className='mb-4'><span className='group cursor-default'> <span className='text-2xl font-bold group-hover:text-blue-500 transition duration-700'>GSM</span> <span className='text-2xl font-bold text-blue-500 group-hover:text-black transition duration-700'>NESI</span></span></h2>
        <ul>
          <li className="mb-2"><i className="fas fa-phone-alt"></i> +91 8606025832</li>
          <li className="mb-2"><i className="fas fa-envelope"></i> example@gmail.com</li>
          <li><i className="fas fa-map-marker-alt"></i>Global</li>
        </ul>
      </div>

      <div className="mb-8 lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Services</h3>
        <ul>
          <li className="mb-2">GSM Equipmentr</li>
          <li className="mb-2">Software Solutions</li>
          <li className="mb-2">Hardware Solutions</li>
          <li className="mb-2">Customer Support</li>
          <li>Mobile Screen Fix</li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="mb-8 lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Social Media</h3>
        <ul>
          <li className="mb-2">Facebook</li>
          <li className="mb-2">Twitter</li>
          <li className="mb-2">LinkedIn</li>
          <li>Pinterest</li>
        </ul>
      </div>

      {/* Contact Address and Newsletter */}
      <div className="lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Contact Address</h3>
        <ul className="mb-4">
          <li>.......................................................</li>
        </ul>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold mb-2">Newsletter</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border p-2 rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
              <i className="fas fa-envelope"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
