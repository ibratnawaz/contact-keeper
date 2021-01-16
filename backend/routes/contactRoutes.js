const express = require('express')
const router = express.Router()
const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
} = require('../controller/contactController')

router.route('/').get(getContacts).post(addContact)

router.route('/:id').put(updateContact).delete(deleteContact)

module.exports = router
