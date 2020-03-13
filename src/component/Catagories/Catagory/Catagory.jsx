import React from 'react'
import { Link } from 'react-router-dom'

const Background = 'img/bg-img/bg-2.jpg'
const Catagory = () => (
  <div className='col-12 col-sm-6 col-md-4'>
    <div className='single_catagory_area d-flex align-items-center justify-content-center bg-img' style={{ backgroundImage: `url(${Background})` }}>
      <div className='catagory-content'>
        <Link to='/shop'>Clothing</Link>
      </div>
    </div>
  </div>
)

export default Catagory
