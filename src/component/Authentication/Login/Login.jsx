import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Authentication.css'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import Input from '../../Generic/Input/Input'
import {
  userSignIn,
  userSignInSuccess,
  showAuthMessage,
  showAuthMessageSuccess,
  showAuthLoader,
  hideAuthLoader,
  statusClean
} from '../../../actions'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidUpdate() {
    if(this.props.showMessage) {
      setTimeout( () => {
        this.props.hideMesssge()
      }, 100)
    }

    if(this.props.authUser !== null) {
      this.props.history.push('/')
    }
  }

  authHandler = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  submitHandler = (e) => {
    e.preventDefault()
    const { email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    // const email= this.state.email
    // const password= this.state.password

    // if(user==='') {
    //   console.log('User blank')
    //   this.props.modalOpen({ message: "Please enter email/phone no." });
    // } else if (password === '') {
    //   console.log('Password blank')
    //   this.props.modalOpen({ message: "Please enter password" });
    // }

    // if (user !== '' && password !== '') {
    //   this.props.signInRequest({user, password})
    // }

    if (email.trim() === '') {
          toast.error('Email cannot be blank', {
            toastId: 'offlinePayment',
            hideProgressBar: true,
            autoClose: 3000,
            position: toast.POSITION.TOP_RIGHT
          })
        this.props.showAuthMessage('Email cannot be blank')
      } else if (password == '') {
          toast.error('Password cannot be blank', {
            toastId: 'offlinePayment',
            hideProgressBar: true,
            autoClose: 3000,
            position: toast.POSITION.TOP_RIGHT
          })
        this.props.showAuthMessage('Password cannot be blank')
      } else if (password.length < 8) {
          toast.error('Password must be atleast 8 characters long', {
            toastId: 'offlinePayment',
            hideProgressBar: true,
            autoClose: 3000,
            position: toast.POSITION.TOP_RIGHT
          })
        this.props.showAuthMessage('Password must be atleast 8 characters long')
      } else {
          // this.props.showAuthLoader()
        this.props.userSignIn({ email, password })
      }
  }

  render () {
    const { email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    return (
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
                    <label for='email_address'>Email Address <span>*</span></label>
                    <Input
                      type='email'
                      value={this.state.email}
                      onChange={(event) => this.setState({ email: event.target.value })}
                      placeholder='Email' />
                    {/* <input type='email' className='form-control' id='email_address' value='' /> */}
                  </div>
                  <div className='col-12 mb-4'>
                    <label for='password'> Password <span>*</span></label>
                    <Input
                      type='password'
                      value={this.state.password}
                      onChange={(event) => this.setState({ password: event.target.value })}
                      placeholder='Password' />
                    {/* <input type='password' className='form-control' id='password' value='' /> */}
                  </div>
                  <div className='col-12 checkout-btn mb-30'>
                    {/* <Link to='/login' className='btn essence-btn'>Login</Link> */}
                    <button 
                      type='submit'
                      className='btn essence-btn'
                      onClick={this.submitHandler}>
                    Login</button>
                  </div>
                  <div className='col-12 mb-100'>
                    <label> New Here?</label> <br />
                    <Link to='/registration' className='btn essence-btn'>Register</Link>
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

const mapStateToProps = ({ auth }) => {
  // return {
  //   showModal: state.Auth.showModal,
  //   signin_success: state.Auth.signin_success
  // }
  const { loader, alertMessage, showMessage, authUser } = auth
  return { loader, alertMessage, showMessage, authUser }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     signInRequest: payload => dispatch(actionType.signInRequest(payload)),
//     modalOpen: payload => dispatch(actionType.modalOpen(payload))
//   }
// }
export default
  connect(mapStateToProps, {
    userSignIn,
    showAuthLoader,
    showAuthMessage,
    statusClean
  })(Login)
// export default Login