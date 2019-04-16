'use strict'

const CreditRequest = require('../models/creditRequest')

function getCreditRequest(req, res) {
  let creditRequestId = req.params.creditRequestId

  CreditRequest.findById(creditRequestId, (err, creditRequest) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Erros al realizar la petición: ${err}` })
    if (!creditRequest)
      return res
        .status(404)
        .send({ message: 'La solicitud de credito no existe' })
    res.status(200).send({ creditRequest })
  })
}

function getCreditRequests(req, res) {
  CreditRequest.find({}, (err, creditRequests) => {
    if (err)
      return res
        .status(500)
        .send({ message: `Erros al realizar la petición: ${err}` })
    if (!creditRequests)
      return res
        .status(404)
        .send({ message: 'No existen las solicitudes de crédito' })
    res.send(200, { creditRequests })
  })
}

function saveCreditRequest(req, res) {
  console.log('POST /api/credit-request')
  console.log(req.body)

  let creditRequest = new CreditRequest()
  creditRequest.requestedValue = req.body.requestedValue
  creditRequest.dateToPay = req.body.dateToPay
  creditRequest.creditStatus = req.body.creditStatus
  creditRequest.paymentCredit = req.body.paymentCredit
  creditRequest.userIdNumber = req.body.userIdNumber
  creditRequest.name = req.body.name

  creditRequest.save((err, creditRequestStored) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al salvar en la base de datos: ${err}` })

    res.status(200).send({ creditRequest: creditRequestStored })
  })
}

function updateCreditRequest(req, res) {
  let creditRequestId = req.params.creditRequestId
  let update = req.body

  CreditRequest.findByIdAndUpdate(
    creditRequestId,
    update,
    (err, creditRequestUpdate) => {
      if (err)
        res
          .status(500)
          .send({ message: `Erros al actualizar el credito: ${err}` })
      res.status(200).send({ creditRequest: creditRequestUpdate })
    }
  )
}

function deleteCreditRequest(req, res) {
  let creditRequestId = req.params.creditRequestId

  CreditRequest.findById(creditRequestId, err => {
    if (err)
      res
        .status(500)
        .send({ message: `Erros al borrar la solicitud de crédito: ${err}` })
    creditRequest.remove(err => {
      if (err)
        res
          .status(500)
          .send({ message: `Error al borrar la soicitud de credito: ${err}` })
      res.status(200).send({ message: 'La solicitud ha sido eliminado' })
    })
  })
}

module.exports = {
  getCreditRequest,
  getCreditRequests,
  saveCreditRequest,
  updateCreditRequest,
  deleteCreditRequest
}
