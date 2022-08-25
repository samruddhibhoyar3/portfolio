const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

dotenv.config({ path: './config.env' })
require('./db/conn')

app.use(express.json())
//link router files to make route easy
app.use(require('./router/auth'))

const PORT = process.env.PORT

const User = require('./model/userSchema')
//middleware
const middleware = (req, res, next) => {
  console.log('hello from middleware')
  next()
}
app.get('/', (req, res) => {
  res.send(`hello from server app.js`)
})
app.get('/about', middleware, (req, res) => {
  res.send('hello from about side app.js')
})

app.get('/contact', (req, res) => {
  res.send('hello from contact side')
})

app.get('/signin', (req, res) => {
  res.send('hello from contact side')
})

app.get('/signup', (req, res) => {
  res.send('hello from contact side')
})

app.get('/register', (req, res) => {
  res.send('hello from contact side')
})

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`)
})
