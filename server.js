// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// BREADS
const breadsController = require('./controllers/bread_controllers.js')
app.use('/breads', breadsController)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(process.env.PORT)