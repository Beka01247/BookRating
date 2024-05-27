const express = require('express')
const app = express()
const sequelize = require('sequelize')
const path = require('path')
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const booksController = require('./controllers/booksController')
app.use('/api/books', booksController)

app.listen(4005, () => {
  console.log('running');
})