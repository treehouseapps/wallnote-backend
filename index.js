const express = require('express')
const server = express()
const bodyParser = require("body-parser")
const cors = require('cors');
require('dotenv').config()

server.use(bodyParser.json())
server.use(cors());
//server.use(express.json())

const routes = require('./route/noteRoutes')


server.get('/', (req, res) => {
   res.json({ msg: 'Hello World ' })
})

server.use('/', routes)
server.listen(process.env.PORT, () => {
    console.log('Server Running in port ' + process.env.PORT)
})
