// packages
const express = require('express')
// models
const Item = require('./models/item')
// varaibles
const app = express()
const { db } = require('./db')
const { successMsg } = require('./functions')
// functions
db(
  'test',
  app.listen(3000, () => successMsg('server running'))
)
// middleware
app.use(express.json())
// routes
app.get('/', (req, res) => {
  res.status(200).json({ test: 'testing one two' })
})
app.post('/', async (req, res) => {
  const { input } = req.body
  const item = new Item({ item: input })
  await item.save()
  res.status(201).send(item)
})
app.get('/items', async (req, res) => {
  const items = await Item.find()
  res.status(200).send(items)
})
