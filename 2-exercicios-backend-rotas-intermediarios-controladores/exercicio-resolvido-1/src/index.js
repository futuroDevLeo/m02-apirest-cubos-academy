const express = require('express')
const {
    encontrarCarro,
    filtrarCarros
} = require('./controladores/carros')

const { validarSenha } = require('./intermediario')

const app = express()

app.use(validarSenha)

app.get('/carros', filtrarCarros)

app.get('/carros/:id', encontrarCarro)

app.listen(8000)