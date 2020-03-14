import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../Authentication.css'
import { connect } from 'react-redux'
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
    console.log('AuthUser', this.props.authUser)
    if(this.props.authUser !== null) {
      // this.props.history.push('/')
    }
  }

  authHandler = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  componentWillUnmount () {
    this.props.statusClean()
  }

  submitHandler = (e) => {
    e.preventDefault()
    const { email, password } = this.state;
    const { showMessage, loader, alertMessage } = this.props;
    if (email.trim() === '') {
          toast.error('Email cannot be blank', {
            toastId: 'offlinePayment',
            hideProgressBar: true,
            autoClose: 3000,
            position: toast.POSITION.TOP_RIGHT
          })
        this.props.showAuthMessage('Email cannot be blank')
      } else if (password === '') {
        console.log('blank password')          
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
          this.props.showAuthLoader()
        this.props.userSignIn({ email, password })
        if(this.props.authUser !== null) {
          // this.props.history.push('/')
        }
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
                  </div>
                  <div className='col-12 mb-4'>
                    <label for='password'> Password <span>*</span></label>
                    <Input
                      type='password'
                      value={this.state.password}
                      onChange={(event) => this.setState({ password: event.target.value })}
                      placeholder='Password' />
                  </div>
                  <div className='col-12 checkout-btn mb-30'>
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

const mapStateToProps = (auth) => {
  console.log('mapStateToProps ->', auth)
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