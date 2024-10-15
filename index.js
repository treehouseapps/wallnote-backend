const express = require('express')
const server = express()
const bodyParser = require("body-parser")
require('dotenv').config()

server.use(bodyParser.json())
//server.use(express.json())

const routes = require('./route/noteRoutes')


server.get('/', (req, res) => {
    res.send(<h1>hellow orld</h1>)
   // res.json({ msg: 'Hello World ' })
})

//server.use('/', routes)
const PORT = 4000
server.listen(PORT, () => {
    console.log('Server Running in port ' + PORT)
})
