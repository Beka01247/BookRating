const express = require('express')
const app = express()
const sequelize = require('sequelize')
const path = require('path')
const cors = require('cors')

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '../client/build')));

const userRoutes = require('./routes/user');
app.use('/api/user', userRoutes)
// app.use('/api/main')

app.listen(4005, () => {
  console.log('running');
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})