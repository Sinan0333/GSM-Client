import React from 'react'

function Footer() {
  return (
    <footer className="bg-white py-12 shadow-xl mb-2">
    <div className="container mx-auto px-20  grid grid-cols-1  md:grid-cols-2  lg:grid-cols-4">
      {/* Logo and Contact Info */}
      <div className="mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Mobifix</h2>
        <ul>
          <li className="mb-2"><i className="fas fa-phone-alt"></i> +00 12 345 6789</li>
          <li className="mb-2"><i className="fas fa-envelope"></i> Support@themeix.com</li>
          <li><i className="fas fa-map-marker-alt"></i> Mobifix Store Location Address, State021, U.S.A.</li>
        </ul>
      </div>

      {/* Services */}
      <div className="mb-8 lg:mb-0">
        <h3 className="text-xl font-bold mb-4">Services</h3>
        <ul>
          <li className="mb-2">Mobile Repair</li>
          <li className="mb-2">Laptop Screen Fix</li>
          <li className="mb-2">Display Repair</li>
          <li className="mb-2">Phone Unlock</li>
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
          <li>2118 Thornridge Cir. Syracuse, Connecticut 35624 USA</li>
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

    <div className="text-center mt-8 text-gray-600">
      ©2021 - Mobifix. All Rights Reserved by <a href="#" className="text-blue-600">themeix</a>
    </div>
  </footer>
  )
}

export default Footer
