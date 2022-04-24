require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const server = require('http').createServer(app)
const { url } = require('./config/db')
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

mongoose.connect(url, { useNewUrlParser: true }).then((result) => {
    console.log('DB runing')
}).catch((err) => {
    console.log('DB error ==>', err)
})

app.use('/api', require('./routes'))

server.listen(PORT, () => {
    console.log(`Server up and running on ${PORT}`)
})