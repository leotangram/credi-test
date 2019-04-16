'use stric'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CreditRequestSchema = Schema({
  requestedValue: Number,
  dateToPay: Date,
  creditStatus: { type: Number, enum: [0, 1] },
  paymentCredit: { type: Number, enum: [0, 1] },
  userIdNumber: Number,
  name: String
})

module.exports = mongoose.model('CreditRequest', CreditRequestSchema)
