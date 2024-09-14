import React from 'react'

const services = [
    {
      title: "GSM Equipment",
      description: "We provide a wide range of GSM equipment, including tools and parts, to meet all your mobile servicing needs.",
      icon: "/icons/mobile.png", 
    },
    {
      title: "Software Solutions",
      description: "Our software offerings include cutting-edge diagnostics and repair tools to enhance your GSM mobile phone servicing capabilities.",
      icon: "/icons/software.png", 
    },
    {
      title: "Hardware Solutions",
      description: "Access high-quality hardware solutions designed for efficient and effective GSM mobile phone repairs and maintenance.",
      icon: "/icons/hardware.png", 
    },
    {
      title: "Customer Support",
      description: "Receive expert assistance and support from our knowledgeable team, ensuring you get the most out of your GSM equipment and software.",
      icon: "/icons/support.png", 
    }
  ];

function Services() {
  return (
    <div className="py-16 px-8 bg-white text-center min-h-screen flex flex-col justify-center ">
        <div >
        <h2 className="text-3xl font-bold text-black mb-4">
            Who we are ?
        </h2>
        <p className="text-xl font-semibold text-gray-700 mb-8">
            <span className="text-blue-500 text-2xl">Demo Name</span> is a professional online gsm store. We offer software/hardware solutions and equipment for GSM mobile phones servicing.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center items-center mb-4 border-2 border-blue-500 p-2 rounded-full w-24 h-24 mx-auto ">
                <img src={service.icon} alt={service.title} className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
                </h3>
                <p className="text-gray-600">
                {service.description}
                </p>
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Services
