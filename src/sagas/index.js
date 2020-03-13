import { all } from 'redux-saga/effects'
import productSagas from './products'
import authSagas from './auth'
export default function * rootSaga (getState) {
  yield all([
    productSagas(),
    authSagas()
  ])
}
