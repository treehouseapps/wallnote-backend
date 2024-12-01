const express = require('express')
const server = express()
const bodyParser = require("body-parser")
const cors = require('cors');
require('dotenv').config()

server.use(bodyParser.json())
server.use(cors());
//server.use(express.json())

const routes = require('./route/noteRoutes')

const msg = [
   { msg: 'Hello World ', },
   {
     noteList: '/home',
     noteLists: '/home/:id',
     clear: '/clear',
     noteCreate: '/create',
     Update: '/update/:id',
     noteDelete: '/delete/:id',
     Delete: '/local/:id',
}]
server.get('/', (req, res) => {
   res.json(msg)
})

server.use('/', routes)
server.listen(process.env.PORT, () => {
    console.log('Server Running in port ' + process.env.PORT)
})
