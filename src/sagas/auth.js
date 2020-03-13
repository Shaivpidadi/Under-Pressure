import { takeEvery, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actionTypes from '../constants/ActionTypes'
import * as actions from '../actions/index'
import axios from '../services'

function* signIn (action) {
  try {
    const { user, password } = action.payload
    let response = yield axios
      .post('/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        email: user,
        password: password
      })

    console.log({ response })
    if (response.status === 200) {
      console.log('Request Commplete')
      yield localStorage.setItem('userData', JSON.stringify(response.data.data))
      yield put(actions.userSignInSuccess(response.data.data))
    } else if (response.status === 500) {
      console.log('User Not found, Something went wrong')
      yield toast.error(response.response.data.message, {
        toastId: 'offlinePayment',
        hideProgressBar: true,
        autoClose: 3000,
        position: toast.POSITION.TOP_LEFT
      })
      yield put(actions.showAuthMessage(''))
    //   yield put(actions.modalOpen({ message: response.response.data.message }))
    } else {
      console.log('Something went wrong')
      yield toast.error(response.response.data.message, {
        toastId: 'offlinePayment',
        hideProgressBar: true,
        autoClose: 3000,
        position: toast.POSITION.TOP_LEFT
      })
      yield put(actions.showAuthMessage(''))
    //   yield put(actions.modalOpen({ message: response.response.data.message }))
    }
  } catch (error) {
    console.log('In Catch', error)
    // yield put(actions.modalOpen({ message: response.response.data.message }))
  }
}

export default function* rootsaga () {
  yield takeEvery(actionTypes.SIGNIN_USER, signIn)
}
