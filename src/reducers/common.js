import * as actionTypes from '../constants/ActionTypes'

export const INITIAL_STATE = {
  showModal: false,
  message: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        message: action.payload.message
      }

    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    default:
      return state
  }
}
