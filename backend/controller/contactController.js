const Contact = require('../models/Contact')

// @route     GET /api/contacts
// @desc      Get all users contacts
// @access    Private
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).sort({
      date: -1,
    })
    res.json(contacts)
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

// @route     POST /api/contacts
// @desc      Add new contact
// @access    Private
const addContact = async (req, res) => {
  try {
    const { name, email, phone, type } = req.body
    const newContact = new Contact({
      name,
      email,
      phone,
      type,
    })

    const contact = await newContact.save()

    res.json(contact)
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

// @route     PUT /api/contacts/:id
// @desc      Update contact
// @access    Private
const updateContact = async (req, res) => {
  try {
    const { name, email, phone, type } = req.body

    let contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })

    contact.name = name
    contact.email = email
    contact.phone = phone
    contact.type = type

    const updatedContact = await contact.save()

    res.json(updatedContact)
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

// @route     DELETE /api/contacts/:id
// @desc      Delete contact
// @access    Private
const deleteContact = async (req, res) => {
  try {
    let contact = await Contact.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })

    await contact.remove()

    res.json({ message: 'Contact deleted' })
  } catch (error) {
    console.error(error.message)
    res.status(500).send(error.message)
  }
}

module.exports = { getContacts, addContact, updateContact, deleteContact }
