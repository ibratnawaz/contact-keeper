import React from 'react'
import ContactForm from './components/contacts/ContactForm'
// import ContactFilter from './components/contacts/ContactFilter'
import Contacts from './components/contacts/Contact'

function App() {
  return (
    <div className='container'>
      <div className='grid-2'>
        <div>
          <ContactForm />
        </div>
        <div>
          {/* <ContactFilter /> */}
          <Contacts />
        </div>
      </div>
    </div>
  )
}

export default App
