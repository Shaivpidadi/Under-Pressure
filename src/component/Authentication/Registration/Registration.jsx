import React from 'react'
import { Link } from 'react-router-dom'
import '../Authentication.css'
import { connect } from 'react-redux'
import {
  showAuthMessage,
  showAuthLoader,
  statusClean,
  userSignUp
} from '../../../actions'
import Input from '../../Generic/Input/Input'
import { toast } from 'react-toastify'
import ToastMessage from '../../Generic/ToastMessage/ToastMessage'
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

  componentDidMount () {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage()
      }, 3000)
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/')
    }
  }

  componentWillUnmount () {
    this.props.statusClean()
  }

  registrationHandler = (e) => {
    e.preventDefault()
    const { firstName, lastName, phoneNumber, email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if ( firstName === '' || lastName === '' || phoneNumber === '' || email === '' || password === '') {
      ToastMessage('You missed something')
    } else if ( phoneNumber.length < 10 || phoneNumber.length > 11) {
      ToastMessage('Please enter valid Phone Number')
    } else if (!validEmailRegex.test(email)) {
      ToastMessage('Please enter valid email')
    } else if ( password.length <= 8) {
      ToastMessage('Password must be more than 8 character')
    } else {
      console.log('done');
      this.props.userSignUp({ firstName, lastName, phoneNumber, email, password})
    }
  }


  render () {
    const { firstName, lastName, phoneNumber, email, password } = this.state
    const { showMessage } = this.props
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
                    <label htmlFor='first_name'>First Name <span>*</span></label>
                    {/* <input type='text' className='form-control' id='first_name' onChange={(event) => {
                      this.setState({ firstName: event.target.value })
                    }} required /> */}
                    <Input
                      type='text'
                      className='form-control'
                      value={firstName}
                      onChange={(event) => this.setState({ firstName: event.target.value })}
                      placeholder='First Name'
                      required />
                  </div>
                  <div className='col-md-6 mb-3'>
                    <label htmlFor='last_name'>Last Name <span>*</span></label>
                    <Input
                      type='text'
                      className='form-control'
                      value={lastName}
                      onChange={(event) => this.setState({ lastName: event.target.value })}
                      placeholder='Last Name'
                      required
                    />
                  </div>
                  <div className='col-12 mb-3'>
                    <label htmlFor='phone_number'>Phone No <span>*</span></label>
                    <Input
                      type='number'
                      className='form-control'
                      value={phoneNumber}
                      onChange={(event) => this.setState({ phoneNumber: event.target.value })}
                      placeholder='Phone Number'
                      required
                    />
                  </div>
                  <div className='col-12 mb-4'>
                    <label htmlFor='email_address'>Email Address <span>*</span></label>
                    <Input
                      type='email'
                      className='form-control'
                      value={email}
                      onChange={(event) => this.setState({ email: event.target.value })}
                      placeholder='Email'
                      required
                    />
                  </div>
                  <div className='col-12 mb-4'>
                    <label htmlFor='password'> Password <span>*</span></label>
                    <Input
                      type='password'
                      className='form-control'
                      value={password}
                      onChange={(event) => this.setState({ password: event.target.value })}
                      placeholder='Password'
                      required
                    />
                  </div>
                  <div className='col-12'>
                    <div className='custom-control custom-checkbox d-block mb-2'>
                      {/* <input type='checkbox' className='custom-control-input' id='customCheck1' onChange={(event) => { this.setState({ terms: event.target.value }) }} /> */}
                      {/* <Input
                        type='checkbox'
                        className='custom-control-ipnut'
                        onChange={(event) => this.setState({ terms: event.target.value })}
                        required
                      />
                      <label className='custom-control-label' htmlFor='customCheck1'>Terms and conitions</label> */}
                    </div>
                    <div className='custom-control custom-checkbox d-block'>
                      {/* <input type='checkbox' className='custom-control-input' id='customCheck3' /> */}
                      {/* <Input
                        type='checkbox'
                        className='custom-control-input'
                        onChange={(event) => this.setState({ subToNewsLetter: event.target.value })}
                        required
                      />
                      <label className='custom-control-label' htmlFor='customCheck3'>Subscribe to our newsletter</label> */}
                    </div>
                  </div>
                  <div className='col-12 checkout-btn mb-30'>
                    {/* <Link to='/registration' className='btn essence-btn'>Register</Link> */}
                    <button 
                      type='submit'
                      className='btn essence-btn'
                      onClick={this.registrationHandler}>
                    Register</button>
                  </div>

                  <div className='col-12 mb-100'>
                    <label> Already Have an Account?</label> <br />
                    <Link to='/login' className='btn essence-btn'>Login</Link>
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

const mapStateToProps = (auth) => {
  console.log({auth})
  const { showMessage, authUser } = auth
  return { showMessage, authUser }
}

export default connect(mapStateToProps, {
  showAuthLoader,
  showAuthMessage,
  statusClean,
  userSignUp
})(Registration)
// export default Registration
