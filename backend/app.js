// initialize js with express middleware
const express = require('express')
const app = express()
// load the error middleware
const errorMiddleware = require('./middleware/error')

// use express json
app.use(express.json())

// require the product route
const product = require('./routes/productRoute')
const user = require('./routes/userRoute')

// add api v1 to product page
app.use('/api/v1', product)
app.use('/api/v1', user)

// add error middleware
app.use(errorMiddleware)

// code for ecommerce store app
module.exports = app
