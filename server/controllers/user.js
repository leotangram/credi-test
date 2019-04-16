'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp(req, res) {
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    numberIdentification: req.body.numberIdentification,
    suitable: req.body.suitable,
    password: req.body.password
  })

  user.avatar = user.gravatar()

  user.save(err => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al crear el usuario: ${err}` })
    return res.status(201).send({ token: service.createToken(user) })
  })
}

const signIn = (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ msg: `Error al ingresar: ${err}` })
    if (!user)
      return res
        .status(404)
        .send({ msg: `no existe el usuario: ${req.body.email}` })

    return user.comparePassword(req.body.password, (err, isMatch) => {
      if (err) return res.status(500).send({ msg: `Error al ingresar: ${err}` })
      if (!isMatch)
        return res
          .status(404)
          .send({ msg: `Error de contraseña: ${req.body.email}` })

      req.user = user
      const us = {
        id: user._id,
        email: user.email,
        name: user.name,
        numberIdentification: user.numberIdentification,
        suitable: user.suitable
      }
      console.log(us)

      return res.status(200).send({
        msg: 'Te has logueado correctamente',
        token: service.createToken(user),
        user: us
      })
    })
  }).select('_id email numberIdentification suitable name +password')
}

function updateUser(req, res) {
  let userId = req.params.userId
  let update = req.body

  User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
    if (err)
      res
        .status(500)
        .send({ message: `Error al actualizar el usuario: ${err}` })
    res.status(200).send({ user: userUpdate })
  })
}

module.exports = {
  signUp,
  signIn,
  updateUser
}
