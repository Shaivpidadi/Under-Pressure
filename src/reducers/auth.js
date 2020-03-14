import * as actionTypes from '../constants/ActionTypes'

const initialState = {
  loader: false,
  alertMessage: '',
  showMessage: false,
  showMessageSuccess: false,
  authUser: localStorage.getItem('user_id'),
  email: ''
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        loader: false,
        authUser: action.payload
      }
    case actionTypes.SHOW_MESSAGE: {
      console.log(' IN SHOW_MESSAGE')
      return {
        ...state,
        alertMessage: action.payload,
        loader: false
      }
    }
    case actionTypes.SHOW_MESSAGE_SUCCESS: {
      return {
        ...state,
        alertMessageSuccess: action.payload,
        showMessageSuccess: true,
        loader: false
      }
    }
    case actionTypes.HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: '',
        showMessage: false,
        loader: false
      }
    }
    case actionTypes.ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true
      }
    }

    case actionTypes.ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false
      }
    }

    case actionTypes.STATUS_CLEAN: {
      return {
        ...state,
        showMessage: false,
        showMessageSuccess: false
      }
    }
    default:
      return state
  }
}

export default AuthReducer
