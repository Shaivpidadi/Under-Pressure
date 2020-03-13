import React from 'react'
import { Link } from 'react-router-dom'
import '../Authentication.css'

class Registration extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      password: '',
      terms: false,
      subToNewsLetter: false
    }
  }

  render () {
    const { firstName, lastName, phoneNumber, email, password } = this.state
    return (
      <React.Fragment>
        <div className='row'>
          <div className='col-md-3' />
          <div className='col-md-6'>
            <div className='checkout_details_area mt-50 clearfix'>

              <div className='cart-page-heading mb-30'>
                <h5 className='authenticationTitle'>Registration</h5>
              </div>

              <form action='/' method='post'>
                <div className='row'>
                  <div className='col-md-6 mb-3'>
                    <label for='first_name'>First Name <span>*</span></label>
                    <input type='text' className='form-control' id='first_name' onChange={(event) => {
                      this.setState({ firstName: event.target.value })
                    }} required />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label for='last_name'>Last Name <span>*</span></label>
                    <input type='text' className='form-control' id='last_name' onChange={(event) => {
                      this.setState({ lastName: event.target.value })
                    }} required />
                  </div>
                  <div className='col-12 mb-3'>
                    <label for='phone_number'>Phone No <span>*</span></label>
                    <input type='number' className='form-control' id='phone_number' min='0' onChange={(event) => {
                      this.setState({ phoneNumber: event.target.value })
                    }} />
                  </div>
                  <div className='col-12 mb-4'>
                    <label for='email_address'>Email Address <span>*</span></label>
                    <input type='email' className='form-control' id='email_address' onChange={(event) => {
                      this.setState({ email: event.target.value })
                    }} />
                  </div>
                  <div className='col-12 mb-4'>
                    <label for='password'> Password <span>*</span></label>
                    <input type='password' className='form-control' id='password' onChange={
                      (event) => {
                        this.setState({ password: event.target.value })
                      }
                    } />
                  </div>
                  <div className='col-12'>
                    <div className='custom-control custom-checkbox d-block mb-2'>
                      <input type='checkbox' className='custom-control-input' id='customCheck1' onChange={(event) => { this.setState({ terms: event.target.value }) }} />
                      <label className='custom-control-label' for='customCheck1'>Terms and conitions</label>
                    </div>
                    <div className='custom-control custom-checkbox d-block'>
                      <input type='checkbox' className='custom-control-input' id='customCheck3' />
                      <label className='custom-control-label' for='customCheck3'>Subscribe to our newsletter</label>
                    </div>
                  </div>
                  <div class='col-12 checkout-btn mb-30'>
                    <Link to='/registration' class='btn essence-btn'>Register</Link>
                  </div>

                  <div className='col-12 mb-100'>
                    <label> Already Have an Account?</label> <br />
                    <Link to='/login' class='btn essence-btn'>Login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-3' />
        </div>
      </React.Fragment>
    )
  }
}

export default Registration
