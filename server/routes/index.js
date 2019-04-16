'use strict'

const express = require('express')
const creditRequestCtrl = require('../controllers/creditRequest')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/credit-requests', creditRequestCtrl.getCreditRequests)
api.get('/credit-request/:creditRequestId', creditRequestCtrl.getCreditRequest)
api.post('/credit-request', creditRequestCtrl.saveCreditRequest)
api.put(
  '/credit-request/:creditRequestId',
  creditRequestCtrl.updateCreditRequest
)
api.delete(
  '/credit-request/:creditRequestId',
  creditRequestCtrl.deleteCreditRequest
)

api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
// api.put('/user/:userId', userCtrl.updateUsers)

module.exports = api
