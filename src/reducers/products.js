/* -------------------------------------------------------------------------------
       This is the Quiz reducer where all Quiz state managed
------------------------------------------------------------------------------------ */

import * as actionTypes from '../constants/ActionTypes'

export const INITIAL_STATE = {
  productList: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_LIST_SUCCESSS:
      return {
        ...state,
        productList: action.payload
      }

    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        productDetail: action.payload.productDetail,
        productDetailSuccess: true
      }
    default:
      return state
  }
}
