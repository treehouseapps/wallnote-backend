const express = require("express")
const server = express.Router()

const { clear, Delete, Update, noteCreate, noteList, noteLists, noteDelete } = require('../controller/noteConteroller')

server.get('/home', noteList)
server.get('/home/:id', noteLists)
server.get('/clear', clear)
server.post('/create', noteCreate)
server.post('/update/:id', Update)
server.get('/delete/:id', noteDelete)
server.get('/local/:id', Delete)


module.exports = server;