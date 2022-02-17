// connect to the mongo db database
const mongoose = require('mongoose')

// connect to the mongo db database
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Connected to MongoDB: ${data.connection.host}`)
    })
}

module.exports = connectDatabase
