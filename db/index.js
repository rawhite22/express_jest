// packages
const chalk = require('chalk')
const mongoose = require('mongoose')
// variables
const { successMsg, infoMsg } = require('../functions')
// env variables

// functions
const db = async () => {
  try {
    await mongoose.connect(process.env.DB_NAME, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    infoMsg(`${process.env.DB_NAME} | db connected.`)
  } catch (err) {
    console.log(err)
  }
}

db()
