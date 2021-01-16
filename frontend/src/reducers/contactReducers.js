import {
  CONTACT_ADD_REQUEST,
  CONTACT_ADD_SUCCESS,
  CONTACT_ADD_FAIL,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
  CONTACT_DELETE_RESET,
} from '../constants/contactConstants'

export const contactAddReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_ADD_REQUEST:
      return { loading: true }
    case CONTACT_ADD_SUCCESS:
      return { loading: false, success: true, newContact: action.payload }
    case CONTACT_ADD_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const contactListReducer = (
  state = { contacts: [], success: false },
  action
) => {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return { ...state, loading: true }
    case CONTACT_LIST_SUCCESS:
      return {
        loading: false,
        success: true,
        contacts: action.payload,
      }
    case CONTACT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export const contactRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_DELETE_REQUEST:
      return { loading: true }
    case CONTACT_DELETE_SUCCESS:
      return { loading: false, success: true, message: action.payload }
    case CONTACT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    case CONTACT_DELETE_RESET:
      return {}
    default:
      return state
  }
}
