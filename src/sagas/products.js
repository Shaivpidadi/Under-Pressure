import { takeEvery, put } from 'redux-saga/effects'
import * as actionTypes from '../constants/ActionTypes'
import * as actions from '../actions/index'
import axios from '../services'

function* getProductList (action) {
  try {
    // const userData = JSON.parse(localStorage.getItem("userData"));
    console.log('AAAAAA')

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFrZWhvbGRlcklkIjoiNWU2ODkwNTQzZDQ4MGE0NWIyMjAyMmUxIiwiaWF0IjoxNTgzOTExMDEwfQ.oijQajHfxetxKcrzcDVWLHY7_ov_IMNCLhuD_4swScE'
    let response = yield axios.get('/product', {
      headers: {
        Authorization: token
      }
    })
    console.log('RES', response.status)

    if (response.status === 200) {
      yield put(actions.getProductListSuccess(response.data.data))
    } else {
      console.log('Some Error in else')
      // yield put(actions.modalOpen({ message: response.response.data.message }));
    }
  } catch (error) {
    console.log('Some Error', error)
    // yield put(actions.modalOpen({ message: response.response.data.message }));
  }
}

// function* getProjectDetailRequest (action) {
//   try {
//     // const userData = JSON.parse(localStorage.getItem('userData'))
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFrZWhvbGRlcklkIjoiNWU2ODkwNTQzZDQ4MGE0NWIyMjAyMmUxIiwiaWF0IjoxNTgzOTExMDEwfQ.oijQajHfxetxKcrzcDVWLHY7_ov_IMNCLhuD_4swScE'
//     const { _id } = action.payload
//     let response = yield axios
//       .get(`/product/${_id}`, {
//         headers: {
//           Authorization: token
//         }
//       })
//       .then(async response => response)
//       .catch(async error => {
//         return error
//       })
//     if (response.status === 200) {
//       yield put(actions.getProjectDetailSuccess({ quizDetail: response.data }))
//     } else {
//     }
//   } catch (error) {}
// }

export default function * rootsaga () {
  yield takeEvery(actionTypes.GET_PRODUCT_LIST_REQUEST, getProductList)
  // yield takeEvery(actionTypes.GET_QUIZ_DETAIL_REQUEST, getProjectDetailRequest)
}
