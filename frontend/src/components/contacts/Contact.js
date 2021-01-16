import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ContactItem from './ContactItem'
import Spinner from '../layout/Spinner'
import { getAllContacts } from '../../actions/contactActions'
import { CONTACT_DELETE_RESET } from '../../constants/contactConstants'

const Contacts = () => {
  const dispatch = useDispatch()

  const contactList = useSelector((state) => state.contactList)

  const contactRemove = useSelector((state) => state.contactRemove)

  const { loading, contacts, success, error } = contactList

  const { success: successDelete } = contactRemove

  useEffect(() => {
    if (!contacts.length && !success) dispatch(getAllContacts())
    if (successDelete) {
      dispatch(getAllContacts())
      dispatch({
        type: CONTACT_DELETE_RESET,
      })
    }
  }, [contacts, successDelete])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : !contacts.length ? (
        <h4>Please add a contact</h4>
      ) : (
        <>
          {contacts.map((contact) => (
            <div key={contact._id} className='item'>
              <ContactItem contact={contact} />
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Contacts
