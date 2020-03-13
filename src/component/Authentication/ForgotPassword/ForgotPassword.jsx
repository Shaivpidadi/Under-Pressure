import React from 'react'
import '../Authentication.css'

const ForgotPassword = () => (
  <React.Fragment>
    <div className='row'>
      <div className='col-md-3' />
      <div className='col-md-6'>
        <div className='checkout_details_area mt-50 clearfix'>

          <div className='cart-page-heading mb-30'>
            <h5 className='authenticationTitle'>Forgot Password</h5>
          </div>

          <form action='#' method='post'>
            <div className='row'>
              <div className='col-12 mb-4'>
                <label for='email_address'>Email Address <span>*</span></label>
                <input type='email' className='form-control' id='email_address' value='' />
              </div>
              <div class='col-12 checkout-btn mb-100'>
                <a href='checkout.html' class='btn essence-btn'>Forgot Password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='col-md-3' />
    </div>
  </React.Fragment>
)

export default ForgotPassword
