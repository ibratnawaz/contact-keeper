import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addContact,
  getAllContacts,
  updateContact,
} from '../../actions/contactActions'
import { CONTACT_CLEAR_CURRENT } from '../../constants/contactConstants'

const ContactForm = () => {
  const dispatch = useDispatch()

  const contactAdd = useSelector((state) => state.contactAdd)
  const contactUpdate = useSelector((state) => state.contactUpdate)

  const { success, error } = contactAdd
  const { current, success: successUpdate } = contactUpdate

  useEffect(() => {
    if (success || !current) {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      })
    }
    if (current) {
      setContact({
        name: current.name,
        email: current.email,
        phone: current.phone,
        type: current.type,
      })
    }

    if (successUpdate || success) dispatch(getAllContacts())

    if (error) console.log(error)
  }, [success, error, current, successUpdate])

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  })

  const { name, email, phone, type } = contact

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value })

  const submitHandler = (e) => {
    e.preventDefault()
    if (!current) dispatch(addContact(contact))
    else dispatch(updateContact(contact, current._id))
  }

  const clearHandler = () => {
    dispatch({
      type: CONTACT_CLEAR_CURRENT,
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
        required
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
        required
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      Professional
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearHandler}>
            Clear
          </button>
        </div>
      )}
    </form>
  )
}

export default ContactForm
