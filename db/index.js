// packages
const mongoose = require('mongoose')
// variables
const { dbURI } = require('../functions')
const { successMsg } = require('../functions')
// env variables
const config = require('config')

// functions
const db = async (dbName, serverStart) => {
  try {
    await mongoose.connect(dbURI(dbName), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    successMsg('db connected')
    serverStart
  } catch (err) {
    console.log(err)
  }
}
// exports
module.exports = {
  db,
}
