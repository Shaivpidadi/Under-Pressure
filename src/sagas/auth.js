import { takeEvery, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actionTypes from '../constants/ActionTypes'
import * as actions from '../actions/index'
import axios from '../services'
import ToastMessage from '../component/Generic/ToastMessage/ToastMessage'

function * signIn (action) {
  try {
    const { email, password } = action.payload
    let response = yield axios
      .post('/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        email,
        password
      })

    if (response.status === 200) {
      console.log('Request Commplete')
      yield localStorage.setItem('userData', JSON.stringify(response.data.data))
      yield put(actions.userSignInSuccess(response.data.data))
    } else if (response.status === 500) {
      yield toast.error(response.response.data.message, {
        toastId: 'offlinePayment',
        hideProgressBar: true,
        autoClose: 3000,
        position: toast.POSITION.TOP_LEFT
      })
      yield put(actions.showAuthMessage(''))
    } else {
      yield toast.error(response.response.data.message, {
        toastId: 'offlinePayment',
        hideProgressBar: true,
        autoClose: 3000,
        position: toast.POSITION.TOP_LEFT
      })
      yield put(actions.showAuthMessage(''))
    }
  } catch (error) {
    console.log('In Catch', error)
    yield put(actions.showAuthMessage('qwerty'))
  }
}

function* signUp (action) {
  try {
    console.log('In signUp Saga')
    const { firstName, lastName, email, password, phoneNumber } = action.payload
    let signUpResponse = yield axios
      .post('/registration', {
        headers: {
          'Content-Type': 'application/json'
        },
        firstName,
        lastName,
        email,
        password,
        phoneNumber
      })

    if (signUpResponse.status === 200) {
      yield localStorage.setItem('userData', JSON.stringify(signUpResponse.data.data))
      yield put(actions.userSignUp(signUpResponse.data.data))
    } else if (signUpResponse.status === 500) {
      console.log({ signUpResponse })
      yield ToastMessage(signUpResponse.message)
    } else {
      ToastMessage(signUpResponse.message)
    }
  } catch (exception) {
    console.log('IN Signup Catch :', exception)
  }
}
export default function * rootsaga () {
  yield takeEvery(actionTypes.SIGNUP_USER, signUp)
  yield takeEvery(actionTypes.SIGNIN_USER, signIn)
}
