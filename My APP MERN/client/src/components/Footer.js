import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollIntoViewTop = () => {
    const headerImageSection = document.getElementById('headerImageSection');
    headerImageSection.scrollIntoView();
  }
  return (
    <div id='Footer' className='Footer'>
      <h2 className='footerTitle'>Contact</h2>
      <section className="footerSectionContainer">
        <section className="contactUsSection">
          <h3><strong>Contact Us</strong></h3>
          <h5><i className="fa-solid fa-location-dot"></i>Address</h5>
          <Link to='https://goo.gl/maps/EcJC2sCWi1vnx2WL6' target='_blank' className='addressLink'>134A/A Hazart Nizamuddin colony, sector A, Bhopal, Madhya Pradesh - 462023, India</Link>

          <h5 className='footerContact'><i className="fa-solid fa-phone"></i>Contact</h5>
          <Link className='mbleLink' to='tel:+918962218817'>+ 91 8962218817</Link>
        </section>
        <section className="servicesWeProvideSection">
          <h3><strong>Our Services</strong></h3>
          <p>Wet Cupping</p>
          <p>Dry Cupping</p>
          <p>Bamboo Cupping</p>
          <p>Fire Cupping</p>
          <p>EMS Cupping</p>
        </section>
        <section className="stayConnectedSection">
        <h3><strong>Stay Connected</strong></h3>
        <section className="allIcons">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        </section>
        <h5 className='availability'><i className="fa-solid fa-clock"></i>Availability</h5>
          <p>Mon to Sun (7 days)
          <br />  7:00 am - 8:00 pm</p>
        </section>
      </section>
      <section onClick={scrollIntoViewTop} className="upArrowIconSection">
      <i className="fa-solid fa-arrow-up"></i>
      </section>

      <section className="footerContentSection">
      <h6 className='footerContent'>&copy; Copyright 2023 Cupping Studio. All Right Reserved. Designed and Developed by Sonam Dangi</h6>
      </section>
    </div>
  )
}

export default Footer
