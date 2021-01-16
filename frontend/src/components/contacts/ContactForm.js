import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, getAllContacts } from '../../actions/contactActions'

const ContactForm = () => {
  const dispatch = useDispatch()

  const contactAdd = useSelector((state) => state.contactAdd)

  const { success, error } = contactAdd

  useEffect(() => {
    if (success) {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      })
    }

    if (error) console.log(error)
  }, [success, error])

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
    dispatch(addContact(contact))
    dispatch(getAllContacts())
  }

  return (
    <form onSubmit={submitHandler}>
      <h2 className='text-primary'>{'Add Contact'}</h2>
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
          value={'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  )
}

export default ContactForm
