import React from 'react'
import '../Authentication.css'

const ResetPassword = () => (
  <React.Fragment>
    <div className='row'>
      <div className='col-md-3' />
      <div className='col-md-6'>
        <div className='checkout_details_area mt-50 clearfix'>

          <div className='cart-page-heading mb-30'>
            <h5 className='authenticationTitle'>Login</h5>
          </div>

          <form action='#' method='post'>
            <div className='row'>
              <div className='col-12 mb-4'>
                <label for='verification_code'>Verification Code <span>*</span></label>
                <input type='text' className='form-control' id='verification_code' value='' />
              </div>
              <div className='col-12 mb-4'>
                <label for='password'> Password <span>*</span></label>
                <input type='password' className='form-control' id='password' value='' />
              </div>
              <div className='col-12 mb-4'>
                <label for='password'> Confirm Password <span>*</span></label>
                <input type='password' className='form-control' id='passwordConfirm' value='' />
              </div>
              <div class='col-12 checkout-btn mb-100'>
                <a href='checkout.html' class='btn essence-btn'>Login</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='col-md-3' />
    </div>
  </React.Fragment>
)

export default ResetPassword
