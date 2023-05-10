import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  const navigate = useNavigate();

  const scrollToViewService = () => {
    const service = document.getElementById('service')
    service.scrollIntoView();
  }

  const scrollIntoViewhomepageDoctorList = () => {
    const homepageDoctorList = document.getElementById('homepageDoctorList');
    homepageDoctorList.scrollIntoView();
  }

  const scrollIntoViewheaderImageSection = () => {
    const headerImageSection = document.getElementById('headerImageSection');
    headerImageSection.scrollIntoView();
  }

  const scrollIntoViewTestimonial = () => {
    const Testimonials = document.getElementById('Testimonials');
    Testimonials.scrollIntoView();
  }

  const scrollIntoViewFooter = () => {
    const Footer = document.getElementById('Footer');
    Footer.scrollIntoView();
  }

  return (
    <section className="headerContainerSection">
      <div className='Header'>
        <section className="DocAppHeading">DOC-APP</section>
        <section className="sideHeading">
          <ul>
            <li><Link onClick={scrollIntoViewheaderImageSection}>Home</Link></li>
            <li><Link onClick={scrollToViewService}>Services</Link></li>
            <li><Link onClick={scrollIntoViewhomepageDoctorList}>Doctor-List</Link></li>
            <li><Link onClick={scrollIntoViewTestimonial}>Testimonials</Link></li>
            <li><Link onClick={scrollIntoViewFooter}>Contact</Link></li>
            <li className="headerPageLogin"><Link to='/login'>Login</Link></li>
          </ul>
        </section>
      </div>
      <section id='headerImageSection' className="headerImageSection">
        <section className="innercontentOfheaderImageSection">
          <p>Welcome to Cupping Studio</p>
          <h2><strong>We are here for your care</strong></h2>
          <button onClick={() => navigate('/login')} className='btn btn-primary'>Book an appointment</button>
        </section>
      </section>
      <section className="headerImageBlockSection">
        <section className="firstBlockSection">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 cardBlockContainer">
                <div className="card-body">
                  <h5 className="card-title cardBlockTitle"><i className="fa-solid fa-clock"></i> <br /> <strong>Working Hours</strong></h5>
                  <p className="card-text">
                    <section className="dayTimeSection">
                      <p className="day">Mon - Sun</p>
                      <p className="time">7:00 am - 8:00 pm</p>
                    </section>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 cardBlockContainer">
                <div className="card-body">
                  <h5 className="card-title cardBlockTitle"><i className="fa-solid fa-location-dot"></i> <br /> <strong>Address</strong></h5>
                  <Link to='https://goo.gl/maps/kqaEhqoGYwMXXijCA' target='_blank' className="card-text cardText">134A/A Hazart Nizamuddin colony, sector A, Bhopal, Madhya Pradesh - 462023, India</Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 cardBlockContainer">
                <div className="card-body">
                  <h5 className="card-title cardBlockTitle"><i className="fa-solid fa-phone"></i> <br /> <strong>Contact Us</strong></h5>
                  <Link to='tel:+918962218817' className="card-text cardText">+ 91 8962218817</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Header
