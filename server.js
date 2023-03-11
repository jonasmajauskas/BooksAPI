const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res, next) => {
    res.send('Hello World, welcome to the Books API')
})

const bookController = require('./controllers/bookcontroller.js')
app.use('/books', bookController)

//listen
app.listen(PORT, () => {
    console.log('Listening to port:', PORT)
})