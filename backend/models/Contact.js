const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'personal',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('contact', ContactSchema)
