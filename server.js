const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Welcome to the the books API.')
})

const bookController = require('./controllers/bookcontroller.js')
app.use('/books', bookController)

//listen
app.listen(PORT, () => {
    console.log('Listening to port:', PORT)
})