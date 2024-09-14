import React from 'react'
import Banner from '../../components/user/Banner'
import Services from '../../components/user/Services'
import Offer from '../../components/user/Offer'
import Cards from '../../components/user/Cards'
import Footer from '../../components/user/Footer'


function Home() {
  return (
    <div className="mt-2 relative">
      <Banner/>
      <Services/>
      {/* <Offer/> */}
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home
