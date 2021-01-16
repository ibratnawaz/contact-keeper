import axios from 'axios'
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
  CONTACT_UPDATE_REQUEST,
  CONTACT_UPDATE_SUCCESS,
  CONTACT_UPDATE_FAIL,
} from '../constants/contactConstants'

export const addContact = (contact) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_ADD_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.post('/api/contacts', contact, config)

    dispatch({
      type: CONTACT_ADD_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getAllContacts = () => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_LIST_REQUEST,
    })

    const res = await axios.get('/api/contacts')

    dispatch({
      type: CONTACT_LIST_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteContact = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_DELETE_REQUEST,
    })

    const res = await axios.delete(`/api/contacts/${id}`)

    dispatch({
      type: CONTACT_DELETE_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateContact = (contact, id) => async (dispatch) => {
  try {
    dispatch({
      type: CONTACT_UPDATE_REQUEST,
    })
    console.log(contact)
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const res = await axios.put(`/api/contacts/${id}`, contact, config)

    dispatch({
      type: CONTACT_UPDATE_SUCCESS,
      payload: res.data,
    })
  } catch (error) {
    dispatch({
      type: CONTACT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
