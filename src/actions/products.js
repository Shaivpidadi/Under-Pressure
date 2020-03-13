import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_LIST_SUCCESSS
} from '../constants/ActionTypes'

export const getProductList = () => {
  return {
    type: GET_PRODUCT_LIST_REQUEST
  }
}

export const getProductListSuccess = payload => {
  return {
    type: GET_PRODUCT_LIST_SUCCESSS,
    payload
  }
}

export const getQuizListSuccess = payload => {
  return {
    type: GET_PRODUCT_LIST_SUCCESSS,
    payload
  }
}

export const productDetail = payload => {
  return {
    type: GET_PRODUCT_DETAIL_REQUEST,
    payload
  }
}

export const getQuizDetailSuccess = payload => {
  return {
    type: GET_PRODUCT_DETAIL_SUCCESS,
    payload
  }
}
