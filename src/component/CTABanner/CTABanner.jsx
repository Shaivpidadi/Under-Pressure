import React from 'react'
import { Link } from 'react-router-dom'

const Background = 'img/bg-img/bg-5.jpg'
const CTABanner = (props) => (
  <div className='cta-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <div className='cta-content bg-img background-overlay' style={{ backgroundImage: `URL(${Background})` }}>
            <div className='h-100 d-flex align-items-center justify-content-end'>
              <div className='cta--text'>
                <h6>-60%</h6>
                <h2>Global Sale</h2>
                <Link to='/shop' className='btn essence-btn'>Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CTABanner
