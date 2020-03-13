import {
  CLOSE_MODAL,
  OPEN_MODAL
} from '../constants/ActionTypes'

export const modalOpen = payload => (
  {
    type: OPEN_MODAL,
    payload
  }
)

export const closeModal = () => ({
  type: CLOSE_MODAL
})
