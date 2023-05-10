import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomepageDoctorList from '../components/home/HomepageDoctorList'
import Service from '../components/Service'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Header />
      <Service />
      <HomepageDoctorList />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage
