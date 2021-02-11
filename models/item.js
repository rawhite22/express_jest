const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
})

const Item = mongoose.model('item', itemSchema)

module.exports = Item
