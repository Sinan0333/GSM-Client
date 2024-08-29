import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import Services from './Services'
import Offer from './Offer'
import Cards from './Cards'
import Footer from './Footer'


function Home() {
  return (
    <div className="mt-2 relative">
      <Nav/>
      <Banner/>
      <Services/>
      <Offer/>
      {/* <Carousel/> */}
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
