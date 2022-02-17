// initialize dotenv variables
const app = require('./app')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database')

// Handling Uncatched Rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Uncaught Exception`)
  process.exit(1)
})

// const connectDatabase = require("./config/database");
// configure the dotenv variable
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase()

// listen on port env
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

//Unhandle promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`)
  console.log(`Shutting down the server due to Unhandled Promise rejection`)

  server.close(() => {
    process.exit(1)
  })
})
