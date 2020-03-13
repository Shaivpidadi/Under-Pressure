import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SHOW_MESSAGE,
  SHOW_MESSAGE_SUCCESS,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  STATUS_CLEAN
} from '../constants/ActionTypes'

export const userSignIn = (user) => {
  return {
    type: SIGNIN_USER,
    payload: user
  }
}

export const userSignInSuccess = (authUser) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser
  }
}

export const showAuthMessage = (message) => {
  return {
    type: SHOW_MESSAGE,
    payload: message
  }
}

export const showAuthMessageSuccess = (message) => {
  return {
    type: SHOW_MESSAGE_SUCCESS,
    payload: message
  }
}

export const showAuthLoader = () => {
  return {
    type: ON_SHOW_LOADER
  }
}

export const hideAuthLoader = () => {
  return {
    type: ON_HIDE_LOADER
  }
}

export const statusClean = () => {
  return {
    type: STATUS_CLEAN
  }
}
