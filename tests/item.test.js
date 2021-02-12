const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const Item = require('../models/item')
const jwt = require('jsonwebtoken')
const { highLightMsg } = require('../functions')

const itemOneId = new mongoose.Types.ObjectId()
const token = jwt.sign({ id: itemOneId }, 'secret')

const itemOne = {
  _id: itemOneId,
  item: 'added after db cleared',
}

beforeEach(async () => {
  await Item.deleteMany()
  await new Item(itemOne).save()
})

beforeAll(() => {
  highLightMsg(token)
})

test('basic get', async () => {
  await request(app).get('/').expect(200)
})
test('get items', async () => {
  await request(app).get('/').expect(200)
})

test('basic post', async () => {
  const response = await request(app)
    .post('/')
    .send({
      input: 'basic post test',
    })
    .expect(201)
  const item = await Item.findById(response.body._id)
  expect(item).not.toBeNull()
  expect(response.body).toMatchObject({
    item: 'basic post test',
  })
  expect(item.item).toBe('basic post test')
  expect(item.item).not.toBe('basic post')
})

afterAll(() => {
  mongoose.connection.close()
})

// test('/auth', async () => {
//   await request(app)
//   .get('')
//   .set()
//   .send()
//   .expect()
// })
