import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from '../../actions/contactActions'
import PropTypes from 'prop-types'

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch()

  const contactRemove = useSelector((state) => state.contactRemove)

  const { loading, message, success, error } = contactRemove

  const { _id, name, email, phone, type } = contact

  const deleteHandler = () => {
    dispatch(deleteContact(_id))
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
        {email && (
          <li>
            <i className='fas fa-envelope-open' /> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' /> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          //   onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={deleteHandler}>
          Delete
        </button>
      </p>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default ContactItem
