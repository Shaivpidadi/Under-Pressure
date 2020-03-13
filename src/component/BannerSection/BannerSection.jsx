import React from 'react'
import { Link } from 'react-router-dom'

const Background = 'img/bg-img/bg-1.jpg'

const BannerSection = (props) => (
  <section className='welcome_area bg-img background-overlay' style={{ backgroundImage: `url(${Background})` }}>
    <div className='container h-100'>
      <div className='row h-100 align-items-center'>
        <div className='col-12'>
          <div className='hero-content'>
            <h6>asoss</h6>
            <h2>New Collection</h2>
            <Link to='/shop' className='btn essence-btn'>view collection</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default BannerSection
